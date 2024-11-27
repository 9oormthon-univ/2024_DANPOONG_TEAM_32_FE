import useAuthStore from '@stores/useAuthStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoRedirect() {
	const { login, checkAuth } = useAuthStore();
	const navigate = useNavigate();

	useEffect(() => {
		checkAuth();

		const code = new URLSearchParams(window.location.search).get('code');
		if (code) {
			login(code);
			navigate('/home');
		}
	}, []);

	return <div>KakaoRedirect</div>;
}
