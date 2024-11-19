import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import YouthMapContainer from '@pages/youthMap';
import youthmapRoutes from '@routes/youthmapRoutes';

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
			element: <YouthMapContainer />,
			children: youthmapRoutes,
		},
	],
};

export default mainRoutes;
