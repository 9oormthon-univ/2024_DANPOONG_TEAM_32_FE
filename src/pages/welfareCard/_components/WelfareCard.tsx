import { useState } from 'react';

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
	const [id, setId] = useState(0);

	const cards = [
		{ element: <IconWelfareCardStartup className="w-full h-full" />, path: 'startup' },
		{ element: <IconWelfareCardHome className="w-full h-full" />, path: 'home' },
		{ element: <IconWelfareCardFairWork className="w-full h-full" />, path: 'home' },
		{ element: <IconWelfareCardStudy className="w-full h-full" />, path: 'home' },
	];

	return (
		<PageContainer>
			<div className="pt-3 flex justify-end">
				<div onClick={() => setGridView(!isGridView)} className="w-8 h-8 flex justify-center items-center">
					{isGridView ? <IconSingleViewToggle /> : <IconGridViewToggle />}
				</div>
			</div>
			<div className={`pt-3 ${isGridView ? 'grid min-[480px]:grid-cols-3 max-[481px]:grid-cols-2 gap-3' : ''}`}>
				{isGridView ? (
					<GridView cards={cards} setGridView={setGridView} setId={setId} />
				) : (
					<SingleView id={id} cards={cards} />
				)}
			</div>
		</PageContainer>
	);
}
