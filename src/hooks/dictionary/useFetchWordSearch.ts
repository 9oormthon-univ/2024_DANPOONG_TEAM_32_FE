import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WordDataType } from '@type/wordData.type';

interface ResponseType {
	data: WordDataType[];
	message: string;
	statusCode: number;
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
