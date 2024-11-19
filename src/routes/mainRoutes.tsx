import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import YouthMapContainer from '@pages/youthMap';
import youthmapRoutes from '@routes/youthmapRoutes';
import MyPage from '@pages/myPage';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Home />,
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
			// element: <Dictionary/>
		},
		{
			path: '/my-page',
			element: <MyPage />,
		},
	],
};

export default mainRoutes;
