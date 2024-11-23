import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconGraduationCap from '@assets/svg/graduation-cap.svg?react';
import IconGraph from '@assets/svg/graph.svg?react';
import IconMoneyBag from '@assets/svg/money-bag.svg?react';
import IconPeople from '@assets/svg/people.svg?react';
import IconBank from '@assets/svg/bank.svg?react';
import IconArrowRight from '@assets/svg/arrow-right.svg?react';
import PageContainer from '@components/PageContainer';
import SearchBar from './SearchBar';

interface IconWrapperProps {
	children: ReactNode;
	className?: string;
}

function IconWrapper({ children, className = '' }: IconWrapperProps) {
	return <div className={`w-8 h-8 flex justify-center items-center ${className}`}>{children}</div>;
}

const MENU_ITEMS: MenuItem[] = [
	{ title: '금융', icon: <IconGraph />, route: 'finance' },
	{ title: '경제', icon: <IconMoneyBag />, route: 'economy' },
	{ title: '사회', icon: <IconPeople />, route: 'society' },
	{ title: '공공', icon: <IconBank />, route: 'public' },
];

interface MenuItem {
	title: string;
	icon: ReactNode;
	route: string;
}

function MenuItem({ title, icon, route }: MenuItem) {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(route)} className="h-20 border-b flex justify-between items-center cursor-pointer">
			<div className="flex items-center">
				<IconWrapper className="mr-6">{icon}</IconWrapper>
				<div className="font-bold">{title}</div>
			</div>
			<IconWrapper>
				<IconArrowRight />
			</IconWrapper>
		</div>
	);
}

export default function Dictionary() {
	const [searchWord, setSearchWord] = useState('');

	function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const inputValue = event.target.value;
		setSearchWord(inputValue);
	}

	function onSearchSubmit(searchValue: string) {
		console.log('Search submitted:', searchValue);
		// TODO: 검색어를 사용해 API 호출 또는 페이지 이동 처리
	}

	return (
		<PageContainer>
			<div>
				<div className="flex flex-col items-center pt-10">
					<div className="flex text-center text-2xl pt-10">
						궁금했던 용어,
						<br />
						유맵이 다 알려드릴게요!
					</div>
				</div>
				<div className="translate-y-[-10%] flex justify-center">
					<IconGraduationCap />
				</div>
				<div className="translate-y-[-100%]">
					<SearchBar inputHandler={inputHandler} onSearchSubmit={onSearchSubmit} type="" />
				</div>
			</div>
			<div>
				{MENU_ITEMS.map((item) => (
					<MenuItem key={item.route} {...item} />
				))}
			</div>
		</PageContainer>
	);
}
