import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconGraph from '@assets/svg/graph.svg?react';
import SearchBar from '../../_components/SearchBar';
import { useState, useEffect } from 'react';
import { useFetchWordByCategory } from '@hooks/dictionary/useFetchWordByCategory';
import { useLocation } from 'react-router-dom';
import WordList from '@pages/dictionary/_components/WordList';

function Spinner() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-8 h-8 border-4 border-theme-main border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}

// 카테고리 매핑
const categoryNames: { [key: string]: string } = {
	finance: '금융',
	society: '사회',
	economy: '경제',
	public: '공공',
};

export default function CategoryPage() {
	const [pageNum, setPageNum] = useState(0);
	const { pathname } = useLocation();

	// 경로에서 카테고리 추출
	const category = pathname.split('/')[2];

	const { data, isLoading, isError } = useFetchWordByCategory(categoryNames[category] || '', pageNum);

	const handleNextPage = () => {
		setPageNum((prev) => prev + 1);
	};

	const handlePrevPage = () => {
		setPageNum((prev) => (prev > 1 ? prev - 1 : 1));
	};

	return (
		<PageContainer>
			<PageNavbar icon={<IconGraph />} title={categoryNames[category] || '카테고리'} />
			<div className="mt-6">
				<SearchBar type={categoryNames[category]} />
			</div>
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
