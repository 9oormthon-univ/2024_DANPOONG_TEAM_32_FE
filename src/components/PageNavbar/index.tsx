import IconArrowLeft from '@assets/svg/arrow-left.svg?react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageNavbarProps {
	icon: ReactNode;
	title: string;
}

export default function PageNavbar({ icon = '', title }: PageNavbarProps) {
	const navigate = useNavigate();

	return (
		<div className="flex items-center h-16 border-b border-theme-gray">
			<div onClick={() => navigate(-1)} className="w-8 h-8 flex justify-center items-center mr-4 cursor-pointer">
				<IconArrowLeft />
			</div>

			{icon !== '' && <div className="flex justify-center items-center pb-1 pr-2">{icon}</div>}
			<div className="flex items-center text-xl font-semibold">{title}</div>
		</div>
	);
}
