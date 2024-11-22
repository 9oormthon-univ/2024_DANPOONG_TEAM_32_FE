import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import IconArrowLeft from '@assets/svg/arrow-left.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';

interface Card {
	element: JSX.Element;
	path: string;
}

interface GridViewProps {
	cards: Card[];
	id: number;
}

export default function SingleView({ cards, id }: GridViewProps) {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(id);

	const handleNext = () => {
		if (currentIndex < cards.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<>
			<div className="relative w-full flex justfy-between items-center pt-2">
				<button onClick={handlePrev} className="pr-1">
					{currentIndex > 0 ? <IconArrowLeft className="w-7 h-7" /> : <div className="w-7 h-7" />}
				</button>
				<div className="flex justify-center overflow-x-hidden">
					<div
						className="flex transition-transform duration-300 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{cards.map((card, index) => (
							<div key={index} className="min-w-full flex justify-center items-center cursor-pointer">
								{card.element}
							</div>
						))}
					</div>
				</div>
				<button onClick={handleNext} className="pl-1">
					{currentIndex < cards.length - 1 ? <IconArrowRight className="w-7 h-7" /> : <div className="w-7 h-7" />}
				</button>
			</div>
			<div className="flex justify-center text-center pt-6 font-bold text-xl">
				{'인천시'} 문화서비스를
				<br />
				추천해드릴게요!
			</div>
			<div>{/* 복지 서비스 추가 예정 */}</div>
		</>
	);
}
