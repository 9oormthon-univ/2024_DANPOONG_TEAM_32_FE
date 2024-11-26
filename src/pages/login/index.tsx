import useAuthStore from '@stores/useAuthStore'; // authStore 모듈에서 useAuthStore 가져오기
import { useEffect } from 'react';

export default function Login() {
	const { initKakao, login, logout, checkAuth } = useAuthStore();

	useEffect(() => {
		initKakao();
	}, []);

	return <button onClick={login}>로그인</button>;
}
