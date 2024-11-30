import PageContainer from '@components/PageContainer';
// import SearchBar from '@pages/dictionary/_components/SearchBar'; // 필요 시 활성화
import LoadmapCard from './_components/RoadmapCard';
import WelfareCard from './_components/WelfareCard';
import { Outlet } from 'react-router-dom';

export default function Home() {
	return (
		<PageContainer>
			<Outlet />
		</PageContainer>
	);
}
