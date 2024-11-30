import Dictionary from '@pages/dictionary/_pages/dictionary';
import DictionaryByCategory from '@pages/dictionary/_pages/category';
import DictionaryDetail from '@pages/dictionary/_pages/detail';
import Bookmark from '@pages/dictionary/_pages/bookmark.tsx';

const dictionaryRoutes = [
	{
		path: '',
		element: <Dictionary />,
	},
	{
		path: 'bookmark',
		element: <Bookmark />,
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
