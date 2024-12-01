import { useNavigate } from 'react-router-dom';

import IconWelfare1 from '@assets/svg/service-employment.svg?react';
import IconWelfare2 from '@assets/svg/service-housing.svg?react';
import IconWelfare3 from '@assets/svg/service-participation.svg?react';
import IconWelfare4 from '@assets/svg/service-education.svg?react';
import IconWelfare5 from '@assets/svg/service-welfare.svg?react';
import IconWelfare6 from '@assets/svg/service-all.svg?react';
import { div } from 'motion/react-client';

const welfareItems = [
	{ title: '일자리', element: <IconWelfare1 className="w-full h-full" />, url: '/welfare/job' },
	{ title: '주거', element: <IconWelfare2 className="w-full h-full" />, url: '/welfare/house' },
	{ title: '참여/권리', element: <IconWelfare3 className="w-full h-full" />, url: '/welfare/participation' },
	{ title: '교육', element: <IconWelfare4 className="w-full h-full" />, url: '/welfare/education' },
	{ title: '복지/문화', element: <IconWelfare5 className="w-full h-full" />, url: '/welfare/culture' },
	{ title: '한번에 보기', element: <IconWelfare6 className="w-full h-full" />, url: '/welfare/all' },
];

export default function WelfareCard() {
	const navigate = useNavigate(); // useNavigate 훅 사용

	return (
		<div className="w-full relative flex flex-col items-center">
			<div className="font-bold text-xl mb-2 self-start pl-2">전체 복지서비스</div>

			<div className="w-full grid grid-cols-4 gap-2 p-3 border border-theme-gray drop-shadow-md bg-white rounded-3xl">
				{welfareItems.map((item, index) => (
					<div
						key={index}
						onClick={() => navigate('/developing')} // 클릭 시 navigate로 이동
						className="aspect-square py-2 flex flex-col justify-center items-center bg-[#EEEEEE] rounded-2xl cursor-pointer">
						<div className="flex flex-col items-center justify-center">
							<div className="w-9 h-9">{item.element}</div>
						</div>
						<div className="text-center text-xs">{item.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}
