import { ReactNode } from 'react';
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

export default function Dictionary() {
	const navigate = useNavigate();

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
					<SearchBar />
				</div>
			</div>
			<div>
				<div
					onClick={() => navigate('finance')}
					className="h-20 border-b flex justify-between items-center cursor-pointer">
					<div className="flex items-center">
						<IconWrapper className="mr-6">
							<IconGraph />
						</IconWrapper>
						<div className="font-bold">금융</div>
					</div>
					<IconWrapper>
						<IconArrowRight />
					</IconWrapper>
				</div>
				<div
					onClick={() => navigate('economy')}
					className="h-20 border-b flex justify-between items-center cursor-pointer">
					<div className="flex items-center">
						<IconWrapper className="mr-6">
							<IconMoneyBag />
						</IconWrapper>
						<div className="font-bold">경제</div>
					</div>
					<IconWrapper>
						<IconArrowRight />
					</IconWrapper>
				</div>
				<div
					onClick={() => navigate('society')}
					className="h-20 border-b flex justify-between items-center cursor-pointer">
					<div className="flex items-center">
						<IconWrapper className="mr-6">
							<IconPeople />
						</IconWrapper>
						<div className="font-bold">사회</div>
					</div>
					<IconWrapper>
						<IconArrowRight />
					</IconWrapper>
				</div>
				<div onClick={() => navigate('public')} className="h-20 flex justify-between items-center cursor-pointer">
					<div className="flex items-center">
						<IconWrapper className="mr-6">
							<IconBank />
						</IconWrapper>
						<div className="font-bold">공공</div>
					</div>
					<IconWrapper>
						<IconArrowRight />
					</IconWrapper>
				</div>
			</div>
		</PageContainer>
	);
}
