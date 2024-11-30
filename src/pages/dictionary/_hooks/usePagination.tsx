import { useState } from 'react';

interface UsePaginationProps {
	initialPage?: number;
	minPage?: number;
}

export const usePagination = ({ initialPage = 0, minPage = 0 }: UsePaginationProps = {}) => {
	const [pageNum, setPageNum] = useState(initialPage);

	const handlePrevPage = () => {
		setPageNum((prev) => (prev > minPage ? prev - 1 : minPage));
	};

	const handleNextPage = () => {
		setPageNum((prev) => prev + 1);
	};

	return {
		pageNum,
		setPageNum,
		handlePrevPage,
		handleNextPage,
	};
};

// components/Pagination/index.tsx
interface PaginationProps {
	pageNum: number;
	onPrevPage: () => void;
	onNextPage: () => void;
	minPage?: number;
	className?: string;
}

export function Pagination({
	pageNum,
	onPrevPage,
	onNextPage,
	minPage = 0,
	className = 'flex justify-evenly mt-4 mb-10',
}: PaginationProps) {
	return (
		<div className={className}>
			<button
				onClick={onPrevPage}
				className="p-2 bg-theme-gray rounded-2xl disabled:opacity-50"
				disabled={pageNum <= minPage}>
				이전
			</button>
			<button onClick={onNextPage} className="p-2 bg-theme-gray rounded-2xl">
				다음
			</button>
		</div>
	);
}
