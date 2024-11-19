import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import YouthMap from '@pages/youthMap';
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
			element: <YouthMap />,
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
