import { useRegionStore } from '@stores/useRegionStore';
import { checkSiDo } from '@utils/checkSiDo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
	const navigate = useNavigate();
	const { selectedRegion, selectedSubRegion } = useRegionStore();

	console.log('selectedRegion', selectedRegion);
	console.log('selectedSubRegion', selectedSubRegion);

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/youth-map/map', { replace: true }); // 지도 화면으로 이동
		}, 2000);

		return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
	}, [navigate]);

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
			<Spinner />
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
