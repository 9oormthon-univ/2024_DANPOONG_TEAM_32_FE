import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import KakaoMap from 'src/Map';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/map',
			element: <KakaoMap />,
		},
	],
};

export default mainRoutes;
