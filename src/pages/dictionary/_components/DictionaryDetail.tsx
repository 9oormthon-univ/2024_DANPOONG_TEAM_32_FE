import PageContainer from '@components/PageContainer';
import PageNavbar from '@components/PageNavbar';
import { useFetchWordById } from '@hooks/dictionary/useFetchWordById';
import { useLocation } from 'react-router-dom';

export default function DictionaryDetail() {
	const { pathname } = useLocation();

	const match = pathname.match(/\/(\d+)$/);

	const id = match ? Number(match[1]) : null;

	const { data, isLoading, isError } = useFetchWordById(id);

	return (
		<PageContainer>
			{!isLoading && (
				<>
					<PageNavbar icon={''} title={!isLoading && data.data.term} />
					<div className="mt-2">
						<div className={`inline-block ${data.data.relatedWelfare && 'border'} rounded-2xl bg-theme-select px-2`}>
							<span className="text-sm text-white">{data.data.relatedWelfare}</span>
						</div>
						<div className="mt-10">
							<div className="text-xl font-bold">설명</div>
							<div>{data.data.description}</div>
						</div>
						<div className="mt-10">
							<div className="text-xl font-bold">예시</div>
							<div>{data.data.example}</div>
						</div>
					</div>
				</>
			)}
		</PageContainer>
	);
}
