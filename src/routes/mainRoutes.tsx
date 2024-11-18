import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import YouthMap from '@pages/youthMap';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/youth-map',
			element: <YouthMap />,
		},
	],
};

export default mainRoutes;
