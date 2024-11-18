import useNetwork from '@stores/networkStore';
import { useQuery } from '@tanstack/react-query';

export const useFetchData = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['data'],
		queryFn: () => {
			return httpInterface.getMockData();
		},
	});

	return { data, isLoading, isError };
};
