import { create } from 'zustand';
import ky from 'ky';
import useNetwork from './networkStore';

const { Kakao } = window;

interface AuthStoreType {
	username: string;
	accessToken: string;
	isAuthenticated: boolean;
	initKakao: () => void;
	kakaoLogin: (code: string) => void;
	kakaoLogout: () => void;
	checkAuth: () => void;
}

const useAuthStore = create<AuthStoreType>((set) => ({
	username: '',
	accessToken: '',
	isAuthenticated: false,

	initKakao: () => {
		if (!Kakao) {
			console.error('Kakao SDK not found');
			return;
		}
		if (!Kakao.isInitialized()) {
			Kakao.init(import.meta.env.VITE_KAKAO_REST_API_KEY);
		} else {
			console.log('Kakao SDK already initialized');
		}
	},

	kakaoLogin: async (code: string) => {
		const response: { data: { accessToken: string; username: string } } = await ky
			.post(`${import.meta.env.VITE_API_PREFIX_URL}/auth/login`, {
				json: { authorizationCode: code },
				credentials: 'include',
			})
			.json();

		// response에서 accessToken을 localStorage에 저장
		localStorage.setItem('accessToken', response.data.accessToken);
		localStorage.setItem('username', response.data.username);

		set({ accessToken: response.data.accessToken, username: response.data.username, isAuthenticated: true });
	},

	kakaoLogout: async () => {
		try {
			if (Kakao.Auth.getAccessToken()) {
				await Kakao.Auth.logout();
			}

			localStorage.removeItem('accessToken');
			localStorage.removeItem('username');

			// await ky.post('/logout');
			set({ username: '', accessToken: '', isAuthenticated: false });
		} catch (error) {
			console.error('Kakao logout failed:', error);
		}
	},

	checkAuth: () => {
		const accessToken = localStorage.getItem('accessToken');
		const username = localStorage.getItem('username');

		if (accessToken) {
			set({ accessToken, username, isAuthenticated: true });
		} else {
			set({ username: '', accessToken: '', isAuthenticated: false });
		}
	},
}));

export default useAuthStore;
