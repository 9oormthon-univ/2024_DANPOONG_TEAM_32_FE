import Dictionary from '@pages/dictionary/_components/Dictionary';
import DictionaryByCategory from '@pages/dictionary/_components/DictionaryByCategory';
import DictionaryDetail from '@pages/dictionary/_components/DictionaryDetail';

const dictionaryRoutes = [
	{
		path: '',
		element: <Dictionary />,
	},
	{
		path: 'finance',
		element: <DictionaryByCategory />,
	},
	{
		path: 'finance/:id',
		element: <DictionaryDetail />,
	},
	{
		path: 'economy',
		element: <DictionaryByCategory />,
	},
	{
		path: 'economy/:id',
		element: <DictionaryDetail />,
	},
	{
		path: 'society',
		element: <DictionaryByCategory />,
	},
	{
		path: 'society/:id',
		element: <DictionaryDetail />,
	},
	{
		path: 'public',
		element: <DictionaryByCategory />,
	},
	{
		path: 'public/:id',
		element: <DictionaryDetail />,
	},
];

export default dictionaryRoutes;
