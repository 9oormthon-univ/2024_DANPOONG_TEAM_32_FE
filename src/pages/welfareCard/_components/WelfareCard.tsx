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

export default function WelfareCard() {
	const [isGridView, setGridView] = useState(true);
	const [id, setId] = useState();
	const [index, setIndex] = useState(0);

	const cards = [
		{ element: <IconWelfareCardStartup className="w-full h-full" />, path: 'startup', id: 1 },
		{ element: <IconWelfareCardHome className="w-full h-full" />, path: 'home', id: 4 },
		{ element: <IconWelfareCardFairWork className="w-full h-full" />, path: 'home', id: 2 },
		{ element: <IconWelfareCardStudy className="w-full h-full" />, path: 'home', id: 8 },
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
							<SingleView id={id} index={index} cards={cards} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</PageContainer>
	);
}
