import IconWelfareCardStartup from '@assets/svg/welfare-card-startup.svg?react';
import IconWelfareCardHome from '@assets/svg/welfare-card-home.svg?react';
import IconWelfareCardFairWork from '@assets/svg/welfare-card-fair-work.svg?react';
import IconWelfareCardStudy from '@assets/svg/welfare-card-study.svg?react';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

const cards = [
	{ element: <IconWelfareCardStartup className="w-full h-full" />, path: 'startup', id: 1 },
	{ element: <IconWelfareCardHome className="w-full h-full" />, path: 'home', id: 4 },
	{ element: <IconWelfareCardFairWork className="w-full h-full" />, path: 'home', id: 2 },
	{ element: <IconWelfareCardStudy className="w-full h-full" />, path: 'home', id: 6 },
];

export default function CardResult() {
	const navigate = useNavigate();
	// 랜덤 카드 선택
	const randomCard = cards[Math.floor(Math.random() * cards.length)];

	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4 mt-36">
			<div className="flex flex-col items-center text-center font-medium mb-52">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">
						복지카드가 발급되었어요!
					</span>
				</h2>
				{/* 랜덤 카드 이미지 추가 */}
				<div className="w-[285px] h-[433px] mt-12 animate-floating">{randomCard.element}</div>
				<Button
					text="다음으로 넘어가기"
					onClick={() => navigate('/')}
					className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-theme-main hover:bg-[#3A4E6F]"
				/>
			</div>
		</div>
	);
}
