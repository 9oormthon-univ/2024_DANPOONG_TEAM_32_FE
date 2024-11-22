import MainLayout from '@layout/mainLayout';

import Home from '@pages/home';
import YouthMapContainer from '@pages/youthMap';
import DictionaryContainer from '@pages/dictionary';
import MyPageContainer from '@pages/myPage';
import OnboardingContainer from '@pages/onBoarding';

import onboardingRoutes from '@routes/onboardingRoutes';
import mypageRoutes from '@routes/mypageRoutes';
import { Navigate } from 'react-router-dom';

import youthmapRoutes from '@routes/youthmapRoutes';
import dictionaryRoutes from '@routes/dictionaryRoutes';
import homeRoutes from '@routes/homeRoutes';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '',
			element: <Navigate replace to={'/home'} />,
		},
		{
			path: '/home',
			element: <Home />,
			children: homeRoutes,
		},
		{
			path: '/welfare-card',
			// element: <WelfareCard/>
		},
		{
			path: '/youth-map',
			element: <YouthMapContainer />,
			children: youthmapRoutes,
		},
		{
			path: '/dictionary',
			element: <DictionaryContainer />,
			children: dictionaryRoutes,
		},
		{
			path: '/my-page',
			element: <MyPageContainer />,
			children: mypageRoutes,
		},
		{
			path: '/onboarding',
			element: <OnboardingContainer />,
			children: onboardingRoutes,
		},
	],
};

export default mainRoutes;
