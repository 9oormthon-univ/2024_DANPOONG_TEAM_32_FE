import SelectBirth from '@pages/createWelfareCard/_components/SelectBirth';
import SelectEducation from '@pages/createWelfareCard/_components/SelectEducation';
import SelectEmployment from '@pages/createWelfareCard/_components/SelectEmployment';
import SelectBasic from '@pages/createWelfareCard/_components/SelectBasic';
import SelectInterest from '@pages/createWelfareCard/_components/SelectInterest';
import SelectLoading from '@pages/createWelfareCard/_components/SelectLoading';

const createWelfareCardRoutes = [
	{
		path: 'select-birth',
		element: <SelectBirth />,
	},
	{
		path: 'select-education',
		element: <SelectEducation />,
	},
	{
		path: 'select-employment',
		element: <SelectEmployment />,
	},
	{
		path: 'select-basic',
		element: <SelectBasic />,
	},
	{
		path: 'select-interest',
		element: <SelectInterest />,
	},
	{
		path: 'select-loading',
		element: <SelectLoading />,
	},
];

export default createWelfareCardRoutes;
