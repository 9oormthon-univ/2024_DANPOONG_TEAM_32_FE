import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconGraduationCap from '@assets/svg/graduation-cap.svg?react';
import IconGraph from '@assets/svg/graph.svg?react';
import IconMoneyBag from '@assets/svg/money-bag.svg?react';
import IconPeople from '@assets/svg/people.svg?react';
import IconBank from '@assets/svg/bank.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import PageContainer from '@components/PageContainer';
import SearchBar from '../../_components/SearchBar';

interface IconWrapperProps {
	children: ReactNode;
	className?: string;
}

function IconWrapper({ children, className = '' }: IconWrapperProps) {
	return <div className={`w-8 h-8 flex justify-center items-center ${className}`}>{children}</div>;
}

interface MenuItem {
	title: string;
	icon: ReactNode;
	route: string;
}

const MENU_ITEMS: MenuItem[] = [
	{ title: '금융', icon: <IconGraph />, route: 'finance' },
	{ title: '경제', icon: <IconMoneyBag />, route: 'economy' },
	{ title: '사회', icon: <IconPeople />, route: 'society' },
	{ title: '공공', icon: <IconBank />, route: 'public' },
];

export default function Dictionary() {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<div>
				<div className="flex flex-col items-center pt-10">
					<div className="flex flex-col text-center text-2xl pt-10">
						<div>궁금했던 용어,</div>
						<div>유맵이 다 알려드릴게요!</div>
					</div>
				</div>
				<div className="translate-y-[-10%] flex justify-center">
					<IconGraduationCap />
				</div>
				<div className="translate-y-[-100%]">
					<SearchBar type="" />
				</div>
			</div>
			<div className="border border-theme-gray drop-shadow-md bg-white rounded-3xl px-5 py-4">
				{MENU_ITEMS.map((item) => (
					<div
						key={item.route}
						onClick={() => navigate(item.route)}
						className="h-16 flex justify-between items-center cursor-pointer">
						<div className="flex items-center">
							<IconWrapper className="mr-3">{item.icon}</IconWrapper>
							<div className="text-lg font-medium">{item.title}</div>
						</div>
						<IconWrapper>
							<IconArrowRight />
						</IconWrapper>
					</div>
				))}
			</div>
		</PageContainer>
	);
}
