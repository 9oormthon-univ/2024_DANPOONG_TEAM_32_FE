import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import { WelfareDetailDataType } from '@type/welfareDetailData.type';

interface ResponseType {
	data: WelfareDetailDataType;
	message: string;
	statusCode: number;
}

export const useFetchWelfareById = (policy_id: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['welfare-by-id', policy_id],
		queryFn: () => httpInterface.getWelfareById({ policy_id }),
		enabled: true,
	});

	return { data: data, isLoading, isError, refetch };
};
