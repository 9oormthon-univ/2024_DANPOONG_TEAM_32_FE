import { useNavigate } from 'react-router-dom';

import { loadmapCategory } from '@constants/loadmapCategory';

import PrevBtn from '@assets/svg/prev.svg?react';
import Category from '@pages/home/_components/Category';
import UnderlineText from '@components/UnderlineText';

export default function LoadMap() {
	const navigate = useNavigate();

	return (
		<div className="w-full h-full">
			<div className="max-w-[388px] mx-auto pb-20">
				<div className="bg-white m-3 mt-8 h-15 cursor-pointer" onClick={() => navigate(-1)}>
					<PrevBtn className="w-[20px] h-[20px]" />
				</div>
				<div className="flex flex-col text-center font-medium my-10 mb-14">
					<h2 className="text-2xl text-black">테마별로 정리한</h2>
					<h2 className="text-2xl text-black">
						<UnderlineText text="청년 복지사업 로드맵" />
						이에요!
					</h2>
				</div>
				<div className="flex flex-col items-center space-y-8 mt-8">
					{loadmapCategory.map((category, index) => (
						<Category key={index} title={category.title} items={category.items} />
					))}
				</div>
			</div>
		</div>
	);
}
