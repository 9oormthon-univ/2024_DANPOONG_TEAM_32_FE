import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '@components/Spinner';
import useCreateCardInfoStore from '@stores/useCreateCardInfoStore';

export default function LoadingScreen() {
	const navigate = useNavigate();

	// 불필요한 연산 방지

	const [loading, setLoading] = useState(true);

	const { birth, education, employ, basic, interest } = useCreateCardInfoStore();
	console.log(birth, education, employ, basic, interest);

	useEffect(() => {
		const fetchData = async () => {
			const startTime = Date.now();

			// 2초 후에 다음 페이지로 이동
			setTimeout(() => {
				setLoading(false);
				navigate('/create-welfare-card/result', { replace: true });
			}, 2000);
		};

		fetchData();
	}, [navigate]);

	return (
		<div className="flex flex-col items-center justify-center h-full bg-white px-4 mt-36">
			<div className="flex flex-col text-center font-medium mb-52">
				<h2 className="text-3xl text-black">
					<span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-7px]">복지카드를</span>
				</h2>
				<h2 className="text-3xl text-black">고르는 중이에요..</h2>
			</div>
			{loading && <Spinner />}
		</div>
	);
}
