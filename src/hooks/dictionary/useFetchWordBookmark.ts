import { useQuery, QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WordDataType } from '@type/wordData.type';

interface ResponseType {
	statusCode: number;
	message: string;
	data: WordDataType;
}

export const useFetchWordBookmark = (page_num: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['word-bookmark', page_num],
		queryFn: () =>
			httpInterface.getWordBookmark({
				page_num,
			}),
	});

	// 타입을 명시적으로 지정하여 일관성을 유지
	return { data, isLoading, isError, refetch };
};
