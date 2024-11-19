import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegionStore } from '@stores/useRegionStore';

import IconMyLocation from '@assets/svg/prev.svg?react';

export default function RegionSelect() {
	const navigate = useNavigate();
	const { setSelectedRegion } = useRegionStore();
	const [selectedRegion, setSelectedRegionLocal] = useState<string | null>(null); // 로컬 상태로 선택된 지역 관리

	const regions = ['서울', '경기', '강원', '충청', '전라', '경상', '부산', '제주'];

	// 다음 버튼 클릭 핸들러
	const handleNext = () => {
		if (selectedRegion) {
			setSelectedRegion(selectedRegion); // 전역 상태에 선택한 지역 저장
			navigate('/youth-map/sub-region'); // 다음 화면으로 이동
		} else {
			alert('지역을 선택해주세요!'); // 선택하지 않았을 때 경고
		}
	};

	return (
		<div className="h-full w-full">
			<div className="bg-white m-5 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<IconMyLocation className="w-[20px] h-[20px]" />
			</div>
			<div className="flex flex-col items-center justify-center h-full bg-white px-4">
				<div className="flex flex-col text-center font-medium mb-8">
					<h2 className="text-3xl text-black">
						원하시는{' '}
						<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">지역</span>
					</h2>
					<h2 className="text-3xl text-black"> 선택해주세요 !</h2>
				</div>
				<div
					className="grid grid-cols-3 gap-6 mb-10
			">
					{regions.map((region) => (
						<button
							key={region}
							onClick={() => setSelectedRegionLocal(region)} // 선택된 지역 설정
							className={`py-4 px-6 w-[100px] h-[100px] rounded-[10px] shadow-sm text-lg font-medium transition ${
								selectedRegion === region
									? 'bg-theme-select border-theme-selectBorder text-black' // 선택된 경우
									: 'bg-white text-black border border-theme-border' // 기본 상태
							}`}>
							{region}
						</button>
					))}
				</div>
				<button
					onClick={handleNext}
					className="mt-8 w-[334px] h-[54px] py-3 px-6 bg-theme-main text-white rounded-lg font-bold text-lg shadow-md transition hover:bg-[#3A4E6F]">
					다음으로 넘어가기
				</button>
			</div>
		</div>
	);
}
