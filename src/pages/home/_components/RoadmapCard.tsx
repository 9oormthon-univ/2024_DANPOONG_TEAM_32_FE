import IconRoadmap from '@assets/svg/roadmap.svg?react';
import { useNavigate } from 'react-router-dom';

export default function RoadmapCard() {
	const navigate = useNavigate();

	return (
		<div className="relative flex items-center justify-center w-full h-full">
			<IconRoadmap className="w-full h-full" />
			<button
				className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[85%] h-[53px] bg-white text-theme-main font-bold rounded-[10px] drop-shadow-custom"
				onClick={() => {
					navigate('/home/roadmap');
				}}>
				청년 복지사업 로드맵 보러가기
			</button>
		</div>
	);
}
