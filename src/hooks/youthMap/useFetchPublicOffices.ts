import { useQuery } from '@tanstack/react-query';

import useNetwork from '@stores/networkStore';
import { PublicOfficeDataType } from '@type/publicOfficeData.type';

interface ResponseType {
	data: PublicOfficeDataType[];
	message: string;
	statusCode: number;
}

export const useFetchPublicOffices = (ne: { lat: number; lng: number }, sw: { lat: number; lng: number }) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError, refetch } = useQuery<ResponseType>({
		queryKey: ['public-offices/nearby'],
		queryFn: () =>
			httpInterface.getPublicOffices({
				leftBottomLongitude: sw.lng,
				leftBottomLatitude: sw.lat,
				rightTopLongitude: ne.lng,
				rightTopLatitude: ne.lat,
			}),
		enabled: ne.lat !== 0 && ne.lng !== 0 && sw.lat !== 0 && sw.lng !== 0,
	});

	return { data, isLoading, isError, refetch };
};
