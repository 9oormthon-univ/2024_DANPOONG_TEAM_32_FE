import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import { useFetchWordById } from '@hooks/dictionary/useFetchWordById';
import RelatedWelfare from '@pages/dictionary/_components/RelatedWelfare';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function DictionaryDetail() {
	const { pathname } = useLocation();

	const id = useMemo(() => {
		const match = pathname.match(/\/dictionary\/detail\/(\d+)$/);
		return match ? parseInt(match[1], 10) : null;
	}, [pathname]);

	const { data, isLoading, isError } = useFetchWordById(id);

	return (
		<PageContainer>
			{!isLoading && (
				<>
					<PageNavbar icon={''} title={!isLoading && data.data.term} />
					<div className="mt-4">
						<RelatedWelfare value={data.data.relatedWelfare} />
						<div className="mt-10">
							<div className="text-xl font-medium">설명</div>
							<div className="mt-2">{data.data.description}</div>
						</div>
						<div className="mt-10">
							<div className="text-xl font-medium">예시</div>
							<div className="mt-2">{data.data.example}</div>
						</div>
					</div>
				</>
			)}
		</PageContainer>
	);
}
