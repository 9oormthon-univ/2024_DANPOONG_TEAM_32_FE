import { useNavigate } from 'react-router-dom';
import { useRegionStore } from '@stores/useRegionStore';

export default function RegionSelect() {
	const navigate = useNavigate();
	const setSelectedRegion = useRegionStore((state) => state.setSelectedRegion);

	const regions = ['서울', '경기', '강원', '충청', '전라', '경상', '부산', '제주'];

	return (
		<div className="flex flex-col items-center justify-center h-full">
			<h2 className="text-xl font-bold mb-6">원하시는 지역을 선택해주세요!</h2>
			<div className="grid grid-cols-3 gap-20">
				{regions.map((region) => (
					<button
						key={region}
						onClick={() => {
							setSelectedRegion(region);
							navigate('/sub-region'); // 세부 지역으로 이동
						}}
						className="py-2 px-4 bg-blue-500 text-white rounded">
						{region}
					</button>
				))}
			</div>
		</div>
	);
}
