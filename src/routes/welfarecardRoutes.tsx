import WelfareCard from '@pages/welfareCard/_components/WelfareCard';
import WelfareDetail from '@pages/welfareCard/_components/WelfareDetail';

const welfarecardRoutes = [
	{
		path: '',
		element: <WelfareCard />,
	},
	{
		path: 'detail/:id',
		element: <WelfareDetail />,
	},
];

export default welfarecardRoutes;
