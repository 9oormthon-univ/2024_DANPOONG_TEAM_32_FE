import Button from '@components/Button';
import loadmapImg from '@assets/images/loadmap-card.png';
import { useNavigate } from 'react-router-dom';

export default function LoadmapCard() {
	const navigate = useNavigate();
	
	return (
		<div className="relative flex items-center justify-center w-[314px] h-[341px]">
			<img src={loadmapImg} alt="청년 로드맵 이미지" className="w-[314px] h-[341px]" />
			<button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[269px] h-[53px] bg-white text-theme-main font-bold rounded-[10px] drop-shadow-custom">
				청년 복지사업 로드맵 보러가기
			</button>
		</div>
	);
}
