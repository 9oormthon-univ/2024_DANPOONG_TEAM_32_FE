import Dictionary from '@pages/dictionary/_pages/dictionary';
import DictionaryByCategory from '@pages/dictionary/_pages/category';
import DictionaryDetail from '@pages/dictionary/_pages/detail';

const dictionaryRoutes = [
	{
		path: '',
		element: <Dictionary />,
	},
	{
		path: ':category',
		element: <DictionaryByCategory />,
	},
	{
		path: 'detail/:id',
		element: <DictionaryDetail />,
	},
];

export default dictionaryRoutes;
