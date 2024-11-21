import { useNavigate } from 'react-router-dom';

import PageNavbar from '@components/PageNavbar';

import { loadmapCategory } from '@constants/loadmapCategory';

import PrevBtn from '@assets/svg/prev.svg?react';
import Category from '@pages/home/_components/Category';

export default function LoadMap() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-full">
			<div className="bg-white m-3 mt-8 h-15 cursor-pointer" onClick={() => navigate(-1)}>
				<PrevBtn className="w-[20px] h-[20px]" />
			</div>
			<div className="flex flex-col items-center space-y-8 mt-8">
				{loadmapCategory.map((category, index) => (
					<Category key={index} title={category.title} items={category.items} />
				))}
			</div>
		</div>
	);
}
