import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconMoneyBag from '@assets/svg/money-bag.svg?react';
import SearchBar from './SearchBar';

export default function Economy() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconMoneyBag />} title="경제" />
			<div className="mt-6">
				<SearchBar />
			</div>
		</PageContainer>
	);
}
