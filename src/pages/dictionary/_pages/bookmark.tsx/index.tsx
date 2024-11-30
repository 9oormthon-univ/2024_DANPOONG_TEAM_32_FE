import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import SearchBar from '../../_components/SearchBar';
import { useState, useEffect } from 'react';
import WordList from '@pages/dictionary/_components/WordList';
import Spinner from '@components/Spinner';
import { useFetchWordBookmark } from '@hooks/dictionary/useFetchWordBookmark';

export default function Bookmark() {
	const [pageNum, setPageNum] = useState(0);

	const { data, isLoading, isError, refetch } = useFetchWordBookmark(pageNum);

	const handleNextPage = () => {
		setPageNum((prev) => prev + 1);
	};

	const handlePrevPage = () => {
		setPageNum((prev) => (prev > 1 ? prev - 1 : 1));
	};

	return (
		<PageContainer>
			<PageNavbar icon="" title="북마크" />
			{/* <div className="mt-6">
				<SearchBar type="북마크" />
			</div> */}
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<WordList isLoading={isLoading} data={data} />
					<div className="flex justify-evenly mt-4 mb-10">
						<button
							onClick={handlePrevPage}
							className="p-2 bg-gray-300 rounded-xl disabled:opacity-50"
							disabled={pageNum <= 1}>
							이전
						</button>
						<button onClick={handleNextPage} className="p-2 bg-gray-300 rounded-xl">
							다음
						</button>
					</div>
				</>
			)}
		</PageContainer>
	);
}
