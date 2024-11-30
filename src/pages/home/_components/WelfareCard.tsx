import { useNavigate } from 'react-router-dom';

import WelfareIcon1 from '@assets/svg/service-employment.svg?react';
import WelfareIcon2 from '@assets/svg/service-housing.svg?react';
import WelfareIcon3 from '@assets/svg/service-participation.svg?react';
import WelfareIcon4 from '@assets/svg/service-education.svg?react';
import WelfareIcon5 from '@assets/svg/service-welfare.svg?react';
import WelfareIcon6 from '@assets/svg/service-all.svg?react';

const welfareItems = [
	{ title: '일자리', element: <WelfareIcon1 className="w-10 h-10" />, url: '/welfare/job' },
	{ title: '주거', icelementoelementn: <WelfareIcon2 className="w-10 h-10" />, url: '/welfare/house' },
	{ title: '참여/권리', element: <WelfareIcon3 className="w-10 h-10" />, url: '/welfare/participation' },
	{ title: '교육', element: <WelfareIcon4 className="w-10 h-10" />, url: '/welfare/education' },
	{ title: '복지/문화', element: <WelfareIcon5 className="w-10 h-10" />, url: '/welfare/culture' },
	{ title: '한번에 보기', element: <WelfareIcon6 className="w-10 h-10" />, url: '/welfare/all' },
];

export default function WelfareCard() {
	const navigate = useNavigate(); // useNavigate 훅 사용

	return (
		<div className="relative flex flex-col items-center">
			<h1 className="font-bold text-lg mb-2 self-start pl-2">전체 복지서비스</h1>

			<div className="w-[314px] bg-white rounded-lg shadow-md border">
				<div className="grid grid-cols-3 gap-4 mt-6 px-6 pb-6">
					{welfareItems.map((item, index) => (
						<div
							key={index}
							onClick={() => navigate('/developing')} // 클릭 시 navigate로 이동
							className="flex flex-col items-center justify-center text-center my-4 cursor-pointer">
							<div className="w-[66px] h-[66px] flex flex-col items-center justify-center bg-gray-100 rounded-full shadow-lg">
								{item.element}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
