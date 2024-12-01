import useAuthStore from '@stores/useAuthStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoRedirect() {
	const { kakaoLogin, accessToken, checkAuth } = useAuthStore();
	const navigate = useNavigate();

	useEffect(() => {
		checkAuth();

		const code = new URLSearchParams(window.location.search).get('code');
		if (code) {
			kakaoLogin(code);
			navigate('/home');
		}
	}, []);

	return <div></div>;
}
