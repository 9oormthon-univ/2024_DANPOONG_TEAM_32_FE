import useMapStore from '@stores/useMapStore';
import ky from 'ky';

export interface KakaoAPIResponseType {
	documents: Array<{
		address_name: string;
		y: string; // 위도
		x: string; // 경도
		address: {
			address_name: string;
			region_1depth_name: string;
			region_2depth_name: string;
			region_3depth_name: string;
			mountain_yn: string;
			main_address_no: string;
			sub_address_no: string;
			zip_code: string;
		};
	}>;
}

export const useFetchKakaoAPI = (sido: string) => {
	const { setCenter } = useMapStore();

	console.log(sido);

	const fetchKakaoAPI = async () => {
		const response: KakaoAPIResponseType = await ky
			.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${sido}`, {
				headers: {
					Authorization: `KakaoAK ${import.meta.env.VITE_API_KEY}`,
				},
			})
			.json<KakaoAPIResponseType>(); // 응답 타입 지정

		console.log(response);
		const { x, y } = response.documents[0];

		setCenter({ lat: parseFloat(y), lng: parseFloat(x) });
	};

	return fetchKakaoAPI;
};
