import PageContainer from '@components/PageContainer';
import SearchBar from '@pages/dictionary/_components/SearchBar';
import { Outlet } from 'react-router-dom';

import LoadmapCard from './_components/LoadmapCard';

export default function Home() {
	return (
		<PageContainer>
			{/* <SearchBar /> */}
			<div className="flex flex-col w-full h-full items-center mt-12">
				<LoadmapCard />
			</div>

			{/* <Outlet /> */}
		</PageContainer>
	);
}
