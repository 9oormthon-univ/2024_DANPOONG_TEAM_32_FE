import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WordDetailDataType } from '@type/wordDetailData.type';

interface ResponseType {
	data: WordDetailDataType;
	message: string;
	statusCode: number;
}

export const useFetchWordDetailById = (word_id: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['word-by-category', word_id],
		queryFn: () =>
			httpInterface.getWordById({
				word_id,
			}),
	});

	return { data, isLoading, isError, refetch };
};
