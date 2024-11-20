import Dictionary from '@pages/dictionary/_components/Dictionary';
import Economy from '@pages/dictionary/_components/Economy';
import Finance from '@pages/dictionary/_components/Finance';
import Public from '@pages/dictionary/_components/Public';
import Society from '@pages/dictionary/_components/Society';

const dictionaryRoutes = [
	{
		path: '',
		element: <Dictionary />,
	},
	{
		path: 'finance',
		element: <Finance />,
	},
	{
		path: 'economy',
		element: <Economy />,
	},
	{
		path: 'society',
		element: <Society />,
	},
	{
		path: 'public',
		element: <Public />,
	},
];

export default dictionaryRoutes;
