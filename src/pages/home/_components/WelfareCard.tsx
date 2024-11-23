import { useNavigate } from 'react-router-dom';

const welfareItems = [
	{
		title: '일자리',
		icon: '/src/assets/images/welfare-icon-1.png',
		url: '/welfare/job',
	},
	{
		title: '주거',
		icon: '/src/assets/images/welfare-icon-2.png',
		url: '/welfare/house',
	},
	{
		title: '참여/권리',
		icon: '/src/assets/images/welfare-icon-3.png',
		url: '/welfare/participation',
	},
	{
		title: '교육',
		icon: '/src/assets/images/welfare-icon-4.png',
		url: '/welfare/education',
	},
	{
		title: '복지/문화',
		icon: '/src/assets/images/welfare-icon-5.png',
		url: '/welfare/culture',
	},
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
								<img src={item.icon} alt={item.title} className="w-8 h-7" />
								<p className="mt-1 text-sm text-gray-700">{item.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
