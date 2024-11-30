import { useLocation } from 'react-router-dom';

import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconGraph from '@assets/svg/graph.svg?react';
import SearchBar from '@pages/dictionary/_components/SearchBar';
import { useFetchWordByCategory } from '@hooks/dictionary/useFetchWordByCategory';
import WordList from '@pages/dictionary/_components/WordList';
import Spinner from '@components/Spinner';
import { Pagination, usePagination } from '@pages/dictionary/_hooks/usePagination';

// 카테고리 매핑
const categoryNames: { [key: string]: string } = {
	finance: '금융',
	society: '사회',
	economy: '경제',
	public: '공공',
};

export default function Category() {
	const { pageNum, handlePrevPage, handleNextPage } = usePagination({
		initialPage: 0,
		minPage: 1,
	});
	const { pathname } = useLocation();
	const category = pathname.split('/')[2];

	const { data, isLoading, isError, refetch } = useFetchWordByCategory(categoryNames[category] || '', pageNum);

	return (
		<PageContainer>
			<PageNavbar icon={<IconGraph />} title={categoryNames[category].concat(' 용어사전')} />
			<div className="mt-6">
				<SearchBar type={categoryNames[category]} />
			</div>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<WordList isLoading={isLoading} data={data} />
					<Pagination pageNum={pageNum} onPrevPage={handlePrevPage} onNextPage={handleNextPage} minPage={1} />
				</>
			)}
		</PageContainer>
	);
}
