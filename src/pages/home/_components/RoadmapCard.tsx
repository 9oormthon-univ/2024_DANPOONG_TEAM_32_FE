import Button from '@components/Button';
import IconRoadmap from '@assets/svg/roadmap.svg?react';
import { useNavigate } from 'react-router-dom';

export default function RoadmapCard() {
	const navigate = useNavigate();

	return (
		<div className="relative flex items-center justify-center w-[314px] h-[341px]">
			<IconRoadmap className="w-[314px] h-[341px]" />
			<button
				className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[269px] h-[53px] bg-white text-theme-main font-bold rounded-[10px] drop-shadow-custom"
				onClick={() => {
					navigate('/home/roadmap');
				}}>
				청년 복지사업 로드맵 보러가기
			</button>
		</div>
	);
}
