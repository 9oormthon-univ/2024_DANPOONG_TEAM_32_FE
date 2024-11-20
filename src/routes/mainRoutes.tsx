import MainLayout from '@layout/mainLayout';
import Home from '@pages/home';
import YouthMapContainer from '@pages/youthMap';
import youthmapRoutes from '@routes/youthmapRoutes';
import DictionaryContainer from '@pages/dictionary';
import dictionaryRoutes from '@routes/dictionaryRoutes';
import MyPageContainer from '@pages/myPage';
import mypageRoutes from '@routes/mypageRoutes';

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
			element: <DictionaryContainer />,
			children: dictionaryRoutes,
		},
		{
			path: '/my-page',
			element: <MyPageContainer />,
			children: mypageRoutes,
		},
	],
};

export default mainRoutes;
