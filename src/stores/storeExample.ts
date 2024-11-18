// 사용 예시로 올려드렸습니다!
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface PageParams {
	page: number;
	setPageNumber: (page: number) => void;
}

const usePageStore = create<PageParams>()(
	devtools(
		// persist(
		(set) => ({
			page: 1,
			setPageNumber: (page: number) => {
				console.log(`page`, page);

				set({ page });
			},
		}),
		{ name: 'filterParams' },

		// ),
	),
);

export default usePageStore;
