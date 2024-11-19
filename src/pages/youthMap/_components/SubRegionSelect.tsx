import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegionStore } from '@stores/useRegionStore';
import IconMyLocation from '@assets/svg/prev.svg?react';
import { checkSiDo } from '@utils/checkSiDo';

export default function SubRegionSelect() {
	const navigate = useNavigate();
	const { selectedRegion, setSelectedSubRegion } = useRegionStore();
	const [selectedSubRegion, setSelectedSubRegionLocal] = useState<string | null>(null); // 로컬 상태로 선택된 지역 관리

	const subRegions = [
		'고양시',
		'남양주시',
		'수원시',
		'인천시',
		'파주시',
		'성남시',
		'화성시',
		'안양시',
		'군포시',
		'용인시',
		'평택시',
		'시흥시',
	];

	// 다음 버튼 클릭 핸들러
	const handleNext = () => {
		if (selectedSubRegion) {
			setSelectedSubRegion(selectedSubRegion); // 전역 상태에 선택한 지역 저장
			navigate('/youth-map/loading'); // 다음 화면으로 이동
		} else {
			alert('세부 지역을 선택해주세요!'); // 선택하지 않았을 때 경고
		}
	};

	return (
		<div className="w-full h-full">
			<div className="bg-white m-5 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<IconMyLocation className="w-[20px] h-[20px]" />
			</div>
			<div className="flex flex-col items-center justify-center h-full bg-white px-4">
				<div className="flex flex-col text-center font-medium mb-8">
					<h2 className="text-3xl text-black">{checkSiDo(selectedRegion)}를 선택하셨네요! </h2>
					<h2 className="text-3xl text-black">
						<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">세부 지역</span>{' '}
						을 선택해주세요!
					</h2>
				</div>
				<div className={`transition-opacity duration-500 w-full max-h-[300px] overflow-y-scroll scrollbar-hide`}>
					{/** 스크롤 가능한 지역 리스트 */}
					<div className="grid grid-cols-1 gap-4 scrollbar-hide">
						{subRegions.map((subRegion) => (
							<button
								key={subRegion}
								onClick={() => setSelectedSubRegionLocal(subRegion)} // 선택된 지역 설정
								className={`py-4 px-6 w-full rounded-lg shadow-sm text-lg font-medium transition ${
									selectedSubRegion === subRegion
										? 'bg-theme-select border-theme-selectBorder text-black' // 선택된 경우
										: 'bg-white text-black border border-theme-border' // 기본 상태
								}`}>
								{subRegion}
							</button>
						))}
					</div>
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
