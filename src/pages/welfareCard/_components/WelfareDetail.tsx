import PageContainer from '@components/PageContainer';
import IconCloseBtn from '@assets/svg/close-btn.svg?react';
import IconHouse from '@assets/svg/house.svg?react';
import IconCheck from '@assets/svg/check.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchWelfareById } from '@hooks/welfareCard/useFetchWelfareById';
import { useMemo } from 'react';

function CheckItem({ title, content }) {
	return (
		<div className="flex flex-col">
			<div className="flex items-center">
				<div className="flex justify-center items-center w-6 h-6 mr-2">
					<IconCheck className="" />
				</div>
				<div className="text-lg font-medium">{title}</div>
			</div>
			<div className="ml-8 pt-1.5">{content}</div>
		</div>
	);
}

export default function WelfareDetail() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const id = useMemo(() => {
		const match = pathname.match(/\/welfare-card\/detail\/(\d+)$/);
		console.log(match);
		return match ? parseInt(match[1], 10) : null;
	}, [pathname]);

	const { data, isLoading, isError, refetch } = useFetchWelfareById(id);

	return (
		<PageContainer>
			<div className="flex flex-col gap-5 mb-10 break-words">
				<div className="flex justify-between mt-5">
					<div className="flex">
						<div className="flex justify-center items-center w-12 h-12">
							<IconHouse className="mr-2.5" />
						</div>
						{data?.data?.policyName && (
							<div className="text-xl font-medium break-keep h-full pt-3">{data.data.policyName}</div>
						)}
					</div>
					<div className="flex justify-center items-center w-12 h-12">
						<IconCloseBtn className="ml-0.5" onClick={() => navigate(-1)} />
					</div>
				</div>

				{data?.data?.policyIntroduction && <div className="mb-4">{data.data.policyIntroduction}</div>}

				{data?.data?.supportTarget && <CheckItem title="지원 대상" content={data.data.supportTarget} />}

				{data?.data?.supportDetails && <CheckItem title="지원 내용" content={data.data.supportDetails} />}

				{data?.data?.supportScale && <CheckItem title="모집 인원" content={data.data.supportScale} />}

				{data?.data?.ageInfo && <CheckItem title="나이 제한" content={data.data.ageInfo} />}

				{data?.data?.applicationProcedure && <CheckItem title="접수 절차" content={data.data.applicationProcedure} />}

				{data?.data?.applicationSite && <div className="ml-8">{data.data.applicationSite}</div>}

				{data?.data?.requiredDocuments && <CheckItem title="신청 방법" content={data.data.requiredDocuments} />}

				{data?.data?.applicationPeriod && <div className="ml-8">{data.data.applicationPeriod}</div>}

				{data?.data?.publicOffice && <CheckItem title="담당 관공서" content={data.data.publicOffice} />}

				{data?.data?.contactPhoneNumber && <CheckItem title="담당자 연락처" content={data.data.contactPhoneNumber} />}
			</div>
		</PageContainer>
	);
}
