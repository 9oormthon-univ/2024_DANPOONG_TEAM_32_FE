import { useQuery } from '@tanstack/react-query';

import useNetwork from '@stores/networkStore';

export const useFetchPublicOffices = (ne: { lat: number; lng: number }, sw: { lat: number; lng: number }) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['public-offices/nearby', ne, sw],
		queryFn: () =>
			httpInterface.getPublicOffices({
				leftBottomLongitude: sw.lng,
				leftBottomLatitude: sw.lat,
				rightTopLongitude: ne.lng,
				rightTopLatitude: ne.lat,
			}),
	});

	return { data, isLoading, isError };
};
