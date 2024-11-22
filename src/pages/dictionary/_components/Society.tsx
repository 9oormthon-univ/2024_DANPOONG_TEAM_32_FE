import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import IconPeople from '@assets/svg/people.svg?react';
import SearchBar from './SearchBar';

export default function Society() {
	return (
		<PageContainer>
			<PageNavbar icon={<IconPeople />} title="사회" />
			<div className="mt-6">
				<SearchBar />
			</div>
		</PageContainer>
	);
}
