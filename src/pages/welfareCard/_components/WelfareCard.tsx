import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import IconSingleViewToggle from '@assets/svg/single-view-toggle.svg?react';
import IconGridViewToggle from '@assets/svg/grid-view-toggle.svg?react';
import IconWelfareCardStartup from '@assets/svg/welfare-card-startup.svg?react';
import IconWelfareCardHome from '@assets/svg/welfare-card-home.svg?react';
import IconWelfareCardFairWork from '@assets/svg/welfare-card-fair-work.svg?react';
import IconWelfareCardStudy from '@assets/svg/welfare-card-study.svg?react';
import PageContainer from '@components/PageContainer';
import GridView from '@pages/welfareCard/_components/GridView';
import SingleView from '@pages/welfareCard/_components/SingleView';

export interface WelfareCardType {
	element: React.ReactNode;
	path: string;
	id: number;
	name: string;
}

export default function WelfareCard() {
	const [isGridView, setGridView] = useState(true);
	const [id, setId] = useState<number | undefined>(undefined);
	const [index, setIndex] = useState(0);

	const cards: WelfareCardType[] = [
		{ element: <IconWelfareCardStartup className="w-full h-full" />, path: 'startup', id: 1, name: '창업' },
		{ element: <IconWelfareCardHome className="w-full h-full" />, path: 'home', id: 4, name: '보금자리' },
		{ element: <IconWelfareCardFairWork className="w-full h-full" />, path: 'home', id: 2, name: '공정근로' },
		{ element: <IconWelfareCardStudy className="w-full h-full" />, path: 'home', id: 7, name: '문화' },
	];

	const containerAni = {
		init: { opacity: 0, x: '100%' },
		animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
	};

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
