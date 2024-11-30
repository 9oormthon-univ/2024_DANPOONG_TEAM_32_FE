import HomeComponents from '@pages/home/_components/HomeComponents';
import RoadMap from '@pages/home/_pages/roadMap';

const homeRoutes = [
	{
		path: '',
		element: <HomeComponents />,
	},
	{
		path: 'roadmap',
		element: <RoadMap />,
	},
];

export default homeRoutes;
