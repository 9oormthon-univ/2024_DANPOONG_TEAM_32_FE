import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WordDataType } from '@type/wordData.type';

interface ResponseType {
	data: WordDataType; // 'data'를 'content'로 수정
	message: string;
	statusCode: number;
}

export const useFetchWordByCategory = (category: string, page_num: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['word-by-category', category, page_num],
		queryFn: () =>
			httpInterface.getWordByCategory({
				category,
				page_num,
			}),
	});

	return { data, isLoading, isError, refetch }; // 'content'만 반환
};
