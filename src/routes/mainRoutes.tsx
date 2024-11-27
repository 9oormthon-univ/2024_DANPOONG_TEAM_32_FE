import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthStore from '@stores/useAuthStore';

import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import WelfareCardContainer from '@pages/welfareCard';
import YouthMapContainer from '@pages/youthMap';
import DictionaryContainer from '@pages/dictionary';
import MyPageContainer from '@pages/myPage';
import CreateWelfareCardContainer from '@pages/createWelfareCard';

import homeRoutes from '@routes/homeRoutes';
import welfarecardRoutes from './welfarecardRoutes';
import youthmapRoutes from '@routes/youthmapRoutes';
import dictionaryRoutes from '@routes/dictionaryRoutes';
import mypageRoutes from '@routes/mypageRoutes';
import createWelfareCardRoutes from '@routes/createWelfareCardRoutes';
import Developing from '@pages/developing';
import Login from '@pages/login';
import KakaoRedirect from '@pages/login/KakaoRedirect';

const mainRoutes = () => {
	const { isAuthenticated, checkAuth } = useAuthStore();

	console.log('isAuthenticated', isAuthenticated);
	useEffect(() => {
		checkAuth();
	}, []);

	return {
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Navigate replace to={'/home'} />,
			},
			{
				path: '/home',
				element: isAuthenticated ? <Home /> : <Navigate replace to={'/login'} />,
				children: homeRoutes,
			},
			{
				path: '/welfare-card',
				element: isAuthenticated ? <WelfareCardContainer /> : <Navigate replace to={'/login'} />,
				children: welfarecardRoutes,
			},
			{
				path: '/youth-map',
				element: isAuthenticated ? <YouthMapContainer /> : <Navigate replace to={'/login'} />,
				children: youthmapRoutes,
			},
			{
				path: '/dictionary',
				element: isAuthenticated ? <DictionaryContainer /> : <Navigate replace to={'/login'} />,
				children: dictionaryRoutes,
			},
			{
				path: '/my-page',
				element: isAuthenticated ? <MyPageContainer /> : <Navigate replace to={'/login'} />,
				children: mypageRoutes,
			},
			{
				path: '/create-welfare-card',
				element: isAuthenticated ? <CreateWelfareCardContainer /> : <Navigate replace to={'/login'} />,
				children: createWelfareCardRoutes,
			},
			{
				path: '/developing',
				element: isAuthenticated ? <Developing /> : <Navigate replace to={'/login'} />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/oauth/redirect/kakao',
				element: <KakaoRedirect />,
			},
		],
	};
};

export default mainRoutes;
