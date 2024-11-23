import { Navigate } from 'react-router-dom';

import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import WelfareCardContainer from '@pages/welfareCard';
import YouthMapContainer from '@pages/youthMap';
import DictionaryContainer from '@pages/dictionary';
import MyPageContainer from '@pages/myPage';
import OnboardingContainer from '@pages/onBoarding';
import CreateWelfareCardContainer from '@pages/createWelfareCard';

import homeRoutes from '@routes/homeRoutes';
import welfarecardRoutes from './welfarecardRoutes';
import youthmapRoutes from '@routes/youthmapRoutes';
import dictionaryRoutes from '@routes/dictionaryRoutes';
import mypageRoutes from '@routes/mypageRoutes';
import onboardingRoutes from '@routes/onboardingRoutes';
import createWelfareCardRoutes from '@routes/createWelfareCardRoutes';

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
			element: <WelfareCardContainer />,
			children: welfarecardRoutes,
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
		{
			path: '/create-welfare-card',
			element: <CreateWelfareCardContainer />,
			children: createWelfareCardRoutes,
		},
	],
};

export default mainRoutes;
