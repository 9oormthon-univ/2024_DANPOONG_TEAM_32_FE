import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRegionStore } from '@stores/useRegionStore';
import { regions } from '@constants/regions';
import UnderlineText from '@components/UnderlineText';

import IconMyLocation from '@assets/svg/prev.svg?react';
import Button from '@components/Button';

export default function SelectBirth() {
	const navigate = useNavigate();
	const { setSelectedRegion } = useRegionStore();
	const [selectedRegion, setSelectedRegionLocal] = useState<string | null>(null); // 로컬 상태로 선택된 지역 관리

	// 다음 버튼 클릭 핸들러
	const handleNext = () => {
		if (selectedRegion) {
			setSelectedRegion(selectedRegion); // 전역 상태에 선택한 지역 저장
			navigate('/create-welfare-card/select-education'); // 다음 화면으로 이동
		} else {
			alert('생년월일을 선택해주세요!');
		}
	};

	return (
		<div className="h-100% w-100%">
			<div className="bg-white m-5 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<IconMyLocation className="w-[20px] h-[20px]" />
			</div>
			<div className="flex flex-col items-center justify-center h-full bg-white px-4">
				<div className="flex flex-col text-center font-medium my-10">
					<h2 className="text-2xl text-black">
						<UnderlineText text="생년월일" />을 입력해주세요!
					</h2>
				</div>
				<div className="grid grid-cols-3 gap-6 my-10">{}</div>
				<Button
					text="다음으로 넘어가기"
					onClick={handleNext}
					className="fixed bottom-5 left-1/2 transform -translate-x-1/2"
				/>
			</div>
		</div>
	);
}
