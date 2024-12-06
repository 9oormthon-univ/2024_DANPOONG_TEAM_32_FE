import { useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';

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
	const navigate = useNavigate();

	return (
		<div className="min-h-32 w-56 flex justify-center mt-4 mb-10 overflow-x-scroll">
			<div
				onClick={() => navigate(`/welfare-card/detail/${policyId}`)}
				className="flex flex-col w-[200px] mb-2 border-theme-main border rounded-xl p-2 justify-between shadow-sm cursor-pointer">
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

export default function SingleView({
	cards,
	id,
	index,
	setId,
	setIndex,
}: GridViewProps & { setId: (id: number) => void; setIndex: (id: number | ((curr: number) => number)) => void }) {
	const { data, isLoading, isError, refetch } = useFetchWelfareByCardId(id);
	const navigate = useNavigate();

	const handlePrev = () => {
		if (index > 0) {
			const newIndex = index - 1;
			setIndex(newIndex);
			setId(cards[newIndex].id);

			// Update URL query parameter
			const searchParams = new URLSearchParams(location.search);
			searchParams.set('index', `${newIndex}`); // Update 'index' in query params
			navigate(`?${searchParams.toString()}`); // Update URL
			refetch();
		}
	};

	const handleNext = () => {
		if (index < cards.length - 1) {
			const newIndex = index + 1;
			setIndex(newIndex);
			setId(cards[newIndex].id);

			// Update URL query parameter
			const searchParams = new URLSearchParams(location.search);
			searchParams.set('index', `${newIndex}`); // Update 'index' in query params
			navigate(`?${searchParams.toString()}`); // Update URL
			refetch();
		}
	};

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		setIndex(parseInt(searchParams.get('index')));
	}, []);

	useEffect(() => {
		if (index >= 0 && index < cards.length) {
			setId(cards[index].id); // index가 업데이트된 이후 실행
			refetch(); // 새로운 index에 맞는 데이터 요청
		}
	}, [index]); // index가 변경될 때마다 실행

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const i = parseInt(searchParams.get('index') || '0', 10); // 기본값 0으로 처리
		if (!isNaN(i) && i >= 0 && i < cards.length) {
			setIndex(i);
			setId(cards[i].id);
		}
	}, [location.search, cards]);

	return (
		<>
			<PageContainer>
				<div className="relative w-full flex justify-between items-center pt-2">
					<div onClick={handlePrev} className={`pr-1 ${index > 0 ? 'cursor-pointer' : ''}`}>
						{index > 0 ? <IconArrowLeft className="w-7 h-7" /> : <div className="w-7 h-7" />}
					</div>
					<div className="flex justify-center overflow-x-hidden">
						<div
							className="flex transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${index * 100}%)` }}>
							{cards.map((card, index) => (
								<div key={index} className="min-w-full flex justify-center items-center">
									{card.element}
								</div>
							))}
						</div>
					</div>
					<div onClick={handleNext} className={`pr-1 ${index < cards.length - 1 ? 'cursor-pointer' : ''}`}>
						{index < cards.length - 1 ? <IconArrowRight className="w-7 h-7" /> : <div className="w-7 h-7" />}
					</div>
				</div>
				<div className="flex justify-center text-center pt-6 font-bold text-xl">
					유맵이 {cards[index].name} 서비스를
					<br />
					추천해드릴게요!
				</div>
			</PageContainer>
			<div className="overflow-x-scroll">
				<div className="flex gap-4">
					{!isLoading &&
						data.data.map(({ policyId, policyName, ageInfo }) => (
							<div key={policyId}>
								<WelfareRecommendCard policyId={policyId} policyName={policyName} ageInfo={ageInfo} />
							</div>
						))}
				</div>
			</div>
		</>
	);
}
