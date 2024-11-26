import { create } from 'zustand';
import ky from 'ky';

const { Kakao } = window;

interface AuthStoreType {
	user: any;
	isAuthenticated: boolean;
	initKakao: () => void;
	login: () => void;
	logout: () => void;
	checkAuth: () => void;
}

const useAuthStore = create<AuthStoreType>((set) => ({
	user: null,
	isAuthenticated: false,

	initKakao: () => {
		if (!Kakao) {
			console.error('Kakao SDK not found');
			return;
		}
		Kakao.init(import.meta.env.VITE_JAVASCRIPT_KEY);
	},

	login: async () => {
		try {
			await new Promise((resolve, reject) => {
				window.Kakao.Auth.authorize({
					redirectUri: 'http://localhost:5173/home',
					success: async (authObj) => {
						const authorizationCode = authObj.code;
						console.log('Authorization Code:', authorizationCode);

						const response = await ky.post('/auth/kakao', {
							json: { authorization_code: authorizationCode },
						});

						// localStorage.setItem('authorizationCode', authorizationCode);
						resolve(authObj);
					},
					fail: (err) => reject(err),
				});
			});

			// 이후 authorization code를 백엔드로 전송하여 access token을 교환
			// const response = await ky
			// 	.post('https://your-backend.com/auth/kakao', {
			// 		json: { authorization_code: authorizationCode },
			// 	})
			// 	.json();

			// const { user } = response;
			// set({ user, isAuthenticated: true });
		} catch (error) {
			console.error('Kakao login failed:', error);
		}
	},

	logout: async () => {
		try {
			if (Kakao.Auth.getAccessToken()) {
				await Kakao.Auth.logout();
			}
			// await ky.post('/logout');
			set({ user: null, isAuthenticated: false });
		} catch (error) {
			console.error('Kakao logout failed:', error);
		}
	},

	checkAuth: async () => {
		try {
			const user = await Kakao.User.me();
			set({ user, isAuthenticated: true });
		} catch (error) {
			console.error('Kakao checkAuth failed:', error);
		}
	},
}));

export default useAuthStore;
