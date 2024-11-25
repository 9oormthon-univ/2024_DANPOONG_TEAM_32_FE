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
				window.Kakao.Auth.login({
					success: (authObj) => resolve(authObj),
					fail: (err) => reject(err),
				});
			});

			const access_token = Kakao.Auth.getAccessToken();
			console.log(Kakao.Auth);
			console.log(access_token);

			// 사용자 정보 요청
			Kakao.API.request({
				url: '/v2/user/me',
				success: (response) => {
					const nickname = response.properties.nickname;
					console.log('Nickname:', nickname);
					// 사용자 정보를 상태에 저장
					set({ user: { nickname }, isAuthenticated: true });
				},
				fail: (error) => {
					console.error('Failed to get user info:', error);
				},
			});

			// 백엔드로 카카오 액세스 토큰 전송
			// const response = await ky
			// 	.post('https://your-backend.com/auth/kakao', {
			// 		json: { access_token },
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
