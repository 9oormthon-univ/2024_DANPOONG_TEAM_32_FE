import { useNavigate } from 'react-router-dom';

import WelfareIcon1 from '@assets/svg/service-employment.svg?react';
import WelfareIcon2 from '@assets/svg/service-housing.svg?react';
import WelfareIcon3 from '@assets/svg/service-participation.svg?react';
import WelfareIcon4 from '@assets/svg/service-education.svg?react';
import WelfareIcon5 from '@assets/svg/service-welfare.svg?react';
import WelfareIcon6 from '@assets/svg/service-all.svg?react';

const welfareItems = [
	{ title: '일자리', element: <WelfareIcon1 className="w-full h-full" />, url: '/welfare/job' },
	{ title: '주거', element: <WelfareIcon2 className="w-full h-full" />, url: '/welfare/house' },
	{ title: '참여/권리', element: <WelfareIcon3 className="w-full h-full" />, url: '/welfare/participation' },
	{ title: '교육', element: <WelfareIcon4 className="w-full h-full" />, url: '/welfare/education' },
	{ title: '복지/문화', element: <WelfareIcon5 className="w-full h-full" />, url: '/welfare/culture' },
	{ title: '한번에 보기', element: <WelfareIcon6 className="w-full h-full" />, url: '/welfare/all' },
];

export default function WelfareCard() {
	const navigate = useNavigate(); // useNavigate 훅 사용

	return (
		<div className="relative flex flex-col items-center">
			<div className="font-bold text-xl mb-2 self-start pl-2">전체 복지서비스</div>

			<div className="grid grid-cols-4 gap-2 p-3 border border-theme-gray drop-shadow-md bg-white rounded-3xl">
				{welfareItems.map((item, index) => (
					<div
						key={index}
						onClick={() => navigate('/developing')} // 클릭 시 navigate로 이동
						className="flex flex-col items-center justify-center cursor-pointer">
						{item.element}
					</div>
				))}
			</div>
		</div>
	);
}
