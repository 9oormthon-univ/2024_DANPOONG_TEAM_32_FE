import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WelfareDataType } from '@type/welfareData.type';

interface ResponseType {
	data: WelfareDataType[];
	message: string;
	statusCode: number;
}

export const useFetchWelfareByCardId = (policy_id: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['welfare-by-card-id', policy_id],
		queryFn: () => httpInterface.getWelfareByCategory({ policy_id }),
		enabled: true,
	});

	return { data: data, isLoading, isError, refetch };
};
