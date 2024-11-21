import HomeComponents from '@pages/home/_components/HomeComponents';
import LoadMap from '@pages/home/_pages/loadMap';

const homeRoutes = [
	{
		path: '',
		element: <HomeComponents />,
	},
	{
		path: 'load-map',
		element: <LoadMap />,
	},
];

export default homeRoutes;
