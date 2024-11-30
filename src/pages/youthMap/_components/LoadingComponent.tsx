import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegionStore } from '@stores/useRegionStore';
import { checkSiDo } from '@utils/checkSiDo';
import { useFetchKakaoAPI } from '@pages/youthMap/_hooks/useFetchKakaoAPI';
import Spinner from '@components/Spinner';

export default function LoadingScreen() {
	const navigate = useNavigate();
	const { selectedRegion, selectedSubRegion } = useRegionStore();

	// 불필요한 연산 방지
	const regionQuery = `${checkSiDo(selectedRegion)} ${selectedSubRegion}`;
	const fetchKakaoAPI = useFetchKakaoAPI(regionQuery);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const startTime = Date.now();

			try {
				await fetchKakaoAPI();
			} catch (error) {
				console.error('Failed to fetch Kakao API:', error);
			} finally {
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(2000 - elapsedTime, 0);
				setTimeout(() => {
					setLoading(false);
					navigate('/youth-map/map', { replace: true });
				}, remainingTime);
			}
		};

		fetchData();
	}, [fetchKakaoAPI, navigate]); // Proper dependencies

	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4">
			<div className="flex flex-col text-center font-medium mb-52">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">
						{checkSiDo(selectedRegion)} {selectedSubRegion}
					</span>
					로
				</h2>
				<h2 className="text-3xl text-black">이동하고 있어요.</h2>
			</div>
			{loading && <Spinner />}
		</div>
	);
}
