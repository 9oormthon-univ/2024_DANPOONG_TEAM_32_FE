import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WordSearchDataType } from '@type/wordSearchData.type';

interface ResponseType {
	statusCode: number;
	message: string;
	data: WordSearchDataType;
}

export const useFetchWordSearch = (type: string, word: string) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['word-search', type, word],
		queryFn: () => httpInterface.getWordSearch({ type, word }),
		enabled: false,
	});

	return { data, isLoading, isError, refetch };
};
