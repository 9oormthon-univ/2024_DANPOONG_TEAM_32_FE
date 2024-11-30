import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import WordList from '@pages/dictionary/_components/WordList';
import Spinner from '@components/Spinner';
import { useFetchWordBookmark } from '@hooks/dictionary/useFetchWordBookmark';
import { Pagination, usePagination } from '@pages/dictionary/_hooks/usePagination';

export default function Bookmark() {
	const { pageNum, handlePrevPage, handleNextPage } = usePagination();
	const { data, isLoading, isError, refetch } = useFetchWordBookmark(pageNum);

	return (
		<PageContainer>
			<PageNavbar icon="" title="북마크" />
			<div className="mt-6">{/* <SearchBar type="북마크" /> */}</div>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<WordList isLoading={isLoading} data={data} />
					<Pagination pageNum={pageNum} onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
				</>
			)}
		</PageContainer>
	);
}
