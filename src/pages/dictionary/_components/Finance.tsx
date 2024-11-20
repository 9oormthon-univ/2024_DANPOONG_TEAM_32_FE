import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconGraph from '@assets/svg/graph.svg?react';
import SearchBar from './SearchBar';

export default function Finance() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconGraph />} title="금융" />
			<div className="mt-6">
				<SearchBar />
			</div>
		</PageContainer>
	);
}
