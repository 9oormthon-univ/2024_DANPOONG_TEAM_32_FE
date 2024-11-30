import { useMutation } from '@tanstack/react-query';
import useNetwork from '@stores/networkStore';

interface ResponseType {
	statusCode: number;
	message: string;
	data: {};
}

export const useUpdateWordBookmark = (word_id: number) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { mutate, mutateAsync, data, isError, error } = useMutation<ResponseType, Error, { word_id: number }>({
		mutationFn: ({ word_id }) =>
			httpInterface.updateBookmark({
				word_id,
			}),
	});

	return { mutate, mutateAsync, data, isError, error };
};
