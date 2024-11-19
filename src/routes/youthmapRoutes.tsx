import RegionSelect from '@pages/youthMap/_components/RegionSelect';
import SubRegionSelect from '@pages/youthMap/_components/SubRegionSelect';
import LoadingComponent from '@pages/youthMap/_components/LoadingComponent';
import YouthMap from '@pages/youthMap/_components/YouthMap';

const youthmapRoutes = [
	{
		path: '',
		element: <RegionSelect />,
	},
	{
		path: 'sub-region',
		element: <SubRegionSelect />,
	},
	{
		path: 'loading',
		element: <LoadingComponent />,
	},
	{
		path: 'map',
		element: <YouthMap />,
	},
];

export default youthmapRoutes;
