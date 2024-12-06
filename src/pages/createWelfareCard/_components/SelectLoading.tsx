import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '@components/Spinner';
import { useCreateWelfarePass } from '@hooks/createWelfarepass/useCreateWelfarePass';

export default function SelectLoading() {
	const navigate = useNavigate();
	const { data, isLoading, isError } = useCreateWelfarePass();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			// 2초 후에 다음 페이지로 이동

			setTimeout(() => {
				setLoading(false);
				navigate('/create-welfare-card/result', {
					replace: true,
					state: { policyPathNum: data?.data.policyPathNum },
				});
			}, 2000);
		};

		fetchData();
	}, [navigate, data]);

	return (
		<div className="relative flex flex-col items-center w-full h-full bg-white px-4 pt-36">
			<div className="flex flex-col text-center font-medium h-full">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">복지카드를</span>
				</h2>
				<h2 className="text-3xl text-black">고르는 중이에요..</h2>
			</div>
			<div className="pt-52 h-screen">{loading && <Spinner />}</div>
		</div>
	);
}
