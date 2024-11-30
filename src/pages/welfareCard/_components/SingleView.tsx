import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import IconArrowLeft from '@assets/svg/arrow-left.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import { useFetchWelfareByCardId } from '@hooks/welfareCard/useFetchWelfareByCardId';
import PageContainer from '@components/PageContainer';
import IconStarActive from '@assets/svg/star-active.svg?react';
import IconStarInactive from '@assets/svg/star-inactive.svg?react';
import { WelfareCardType } from './WelfareCard';

interface GridViewProps {
	cards: WelfareCardType[];
	id: number;
	index: number;
}

interface WelfareRecommendCardProps {
	policyId: number;
	policyName: string;
	ageInfo: string;
}

function WelfareRecommendCard({ policyId, policyName, ageInfo }: WelfareRecommendCardProps) {
	return (
		<div key={policyId} className="min-h-32 w-56 flex justify-center mt-4 overflow-x-scroll">
			<div className="flex flex-col w-[200px] mb-2 border-theme-main border rounded-xl p-2 justify-between shadow-sm">
				<div className="flex">
					<div className="w-6 h-6 flex justify-center items-center mr-1">
						<IconStarInactive className="w-[18px] h-[18px]" />
					</div>
					<div>{policyName}</div>
				</div>
				<div className="flex">
					<div className="border rounded-xl px-1 py-0.5 text-xs bg-[#4B628A] text-white">{ageInfo}</div>
				</div>
			</div>
		</div>
	);
}

export default function SingleView({ cards, id, index, setId }: GridViewProps & { setId: (id: number) => void }) {
	const [currentIndex, setCurrentIndex] = useState(index);
	const { data, isLoading, isError, refetch } = useFetchWelfareByCardId(id);

	const handlePrev = () => {
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			setId(cards[newIndex].id);
			refetch();
		}
	};

	const handleNext = () => {
		if (currentIndex < cards.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			setId(cards[newIndex].id);
			refetch();
		}
	};

	return (
		<>
			<PageContainer>
				<div className="relative w-full flex justify-between items-center pt-2">
					<div onClick={handlePrev} className={`pr-1 ${currentIndex > 0 ? 'cursor-pointer' : ''}`}>
						{currentIndex > 0 ? <IconArrowLeft className="w-7 h-7" /> : <div className="w-7 h-7" />}
					</div>
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
					<div onClick={handleNext} className={`pr-1 ${currentIndex < cards.length - 1 ? 'cursor-pointer' : ''}`}>
						{currentIndex < cards.length - 1 ? <IconArrowRight className="w-7 h-7" /> : <div className="w-7 h-7" />}
					</div>
				</div>
				<div className="flex justify-center text-center pt-6 font-bold text-xl">
					유맵이 {cards[currentIndex].name} 서비스를
					<br />
					추천해드릴게요!
				</div>
			</PageContainer>
			<div className="overflow-x-scroll">
				<div className="flex gap-4">
					{!isLoading &&
						data.data.map(({ policyId, policyName, ageInfo }) => (
							<div>
								<WelfareRecommendCard policyId={policyId} policyName={policyName} ageInfo={ageInfo} />
							</div>
						))}
				</div>
			</div>
		</>
	);
}
