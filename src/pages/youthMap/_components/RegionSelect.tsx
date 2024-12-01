import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegionStore } from '@stores/useRegionStore';
import { regions } from '@constants/regions';
import UnderlineText from '@components/UnderlineText';

import IconMyLocation from '@assets/svg/prev.svg?react';
import Button from '@components/Button';

export default function RegionSelect() {
	const navigate = useNavigate();
	const { setSelectedRegion } = useRegionStore();
	const [selectedRegion, setSelectedRegionLocal] = useState<string | null>(null); // 로컬 상태로 선택된 지역 관리

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
			<div className="bg-white px-5 pt-8 pb-5 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<IconMyLocation className="w-[20px] h-[20px]" />
			</div>
			<div className="flex flex-col items-center h-full bg-white px-4">
				<div className="flex flex-col text-center font-medium py-10">
					<h2 className="text-3xl text-black">
						원하시는 <UnderlineText text="지역" />
					</h2>
					<h2 className="text-3xl text-black"> 선택해주세요 !</h2>
				</div>
				<div className="grid grid-cols-3 gap-6 my-10">
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
				<Button
					text="다음으로 넘어가기"
					onClick={handleNext}
					className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
				/>
			</div>
		</div>
	);
}
