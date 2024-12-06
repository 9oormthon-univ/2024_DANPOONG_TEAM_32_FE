import { useQuery } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';
import useCreateCardInfoStore from '@stores/useCreateCardInfoStore';

interface ResponseType {
	statusCode: number;
	message: string;
	data: {
		policyPathNum: number;
	};
}

export const useCreateWelfarePass = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);
	const { birth, education, employ, basic, interest } = useCreateCardInfoStore();

	const { data, isLoading, isError } = useQuery<ResponseType>({
		queryKey: ['create-welfare-pass'],
		queryFn: () =>
			httpInterface.postCreateWelfarePass({
				birthDate: `${birth.year} ${birth.month} ${birth.day}`,
				educationStatus: education,
				employmentStatus: employ,
				baseInfo: basic,
				interestTopic: interest,
			}),
	});

	// 타입을 명시적으로 지정하여 일관성을 유지
	return { data, isLoading, isError };
};
