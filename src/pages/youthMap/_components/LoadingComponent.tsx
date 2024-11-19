import { useRegionStore } from '@stores/useRegionStore';
import { checkSiDo } from '@utils/checkSiDo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchKakaoAPI } from '../_hooks/useFetchKakaoAPI';

export default function LoadingScreen() {
	const navigate = useNavigate();
	const { selectedRegion, selectedSubRegion } = useRegionStore();
	const fetchKakaoAPI = useFetchKakaoAPI(checkSiDo(selectedRegion) + ' ' + selectedSubRegion); // Fetch API
	const [loading, setLoading] = useState(true); // Loading 상태 관리

	useEffect(() => {
		// Kakao API Fetch 실행 및 완료 시 페이지 이동
		const fetchData = async () => {
			const startTime = Date.now(); // 시작 시간 기록

			try {
				await fetchKakaoAPI(); // Fetch가 완료될 때까지 대기
			} catch (error) {
				console.error('Failed to fetch Kakao API:', error);
			} finally {
				// 최소 2초가 지나도록 대기
				const elapsedTime = Date.now() - startTime;
				const remainingTime = Math.max(2000 - elapsedTime, 0); // 최소 2초 유지
				setTimeout(() => {
					setLoading(false); // Loading 상태 종료
					navigate('/youth-map/map', { replace: true }); // Fetch 완료 후 이동
				}, remainingTime);
			}
		};

		fetchData();
	}, [fetchKakaoAPI, navigate]);

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
			{loading && <Spinner />} {/* Fetch 중일 때 Spinner 표시 */}
		</div>
	);
}

function Spinner() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-8 h-8 border-4 border-theme-main border-t-transparent rounded-full animate-spin"></div>
		</div>
	);
}
