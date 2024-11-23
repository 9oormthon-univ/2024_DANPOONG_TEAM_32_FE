import SelectBirth from '@pages/createWelfareCard/_components/SelectBirth';
import SelectEducation from '@pages/createWelfareCard/_components/SelectEducation';
import SelectEmployment from '@pages/createWelfareCard/_components/SelectEmployment';
import SelectBasic from '@pages/createWelfareCard/_components/SelectBasic';

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
];

export default createWelfareCardRoutes;
