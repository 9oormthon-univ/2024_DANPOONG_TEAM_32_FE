import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconBank from '@assets/svg/bank.svg?react';
import SearchBar from './SearchBar';

export default function Public() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconBank />} title="공공" />
			<div className="mt-6">
				<SearchBar />
			</div>
		</PageContainer>
	);
}
