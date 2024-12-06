import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import IconSingleViewToggle from '@assets/svg/single-view-toggle.svg?react';
import IconGridViewToggle from '@assets/svg/grid-view-toggle.svg?react';
import PageContainer from '@components/PageContainer';
import GridView from '@pages/welfareCard/_components/GridView';
import SingleView from '@pages/welfareCard/_components/SingleView';

import { welfarePass } from '@constants/welfarePass';
import useNetwork from '@stores/networkStore';

export interface WelfareCardType {
	element: React.ReactNode;
	path: string;
	id: number;
	name: string;
}

export default function WelfareCard() {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const [isGridView, setGridView] = useState(true);
	const [id, setId] = useState<number | undefined>(undefined);
	const [index, setIndex] = useState(0);
	const [cards, setCards] = useState<WelfareCardType[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await httpInterface.getWelfarePass();
				console.log(res);

				if (Array.isArray(res.data)) {
					// 배열인 경우 `welfarePass`와 비교하여 해당 항목 선택
					const selectedCards = welfarePass
						.filter(
							(card) => res.data.includes(card.id), // res.data 배열에 포함된 id만 선택
						)
						.map((card) => ({
							element: card.element,
							path: card.path,
							id: card.id,
							name: card.name,
						}));
					setCards(selectedCards);
				} else {
					console.error('Invalid response from API:', res);
				}
			} catch (error) {
				console.error('Error fetching cards:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [httpInterface]);

	const containerAni = {
		init: { opacity: 0, x: '100%' },
		animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
	};

	if (loading) {
		return <PageContainer>Loading...</PageContainer>;
	}

	console.log(cards);

	return (
		<PageContainer>
			<div className="pt-3 flex justify-end">
				<div onClick={() => setGridView(!isGridView)} className="w-8 h-8 flex justify-center items-center">
					{isGridView ? <IconSingleViewToggle /> : <IconGridViewToggle />}
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isGridView ? (
					<motion.div key="gridView" initial="init" animate="animate" exit="exit" variants={containerAni}>
						<div className={`pt-3 grid min-[480px]:grid-cols-3 max-[481px]:grid-cols-2 gap-3`}>
							<GridView cards={cards} setGridView={setGridView} setId={setId} setIndex={setIndex} />
						</div>
					</motion.div>
				) : (
					<motion.div key="singleView" initial="init" animate="animate" exit="exit" variants={containerAni}>
						<div className={`pt-3`}>
							<SingleView id={id} index={index} cards={cards} setId={setId} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</PageContainer>
	);
}
