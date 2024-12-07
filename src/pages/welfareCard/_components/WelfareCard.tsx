import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import IconSingleViewToggle from '@assets/svg/single-view-toggle.svg?react';
import IconGridViewToggle from '@assets/svg/grid-view-toggle.svg?react';
import PageContainer from '@components/PageContainer';
import GridView from '@pages/welfareCard/_components/GridView';
import SingleView from '@pages/welfareCard/_components/SingleView';

import { welfarePass } from '@constants/welfarePass';
import useNetwork from '@stores/networkStore';
import { useLocation, useNavigate } from 'react-router-dom';

export interface WelfareCardType {
	element: React.ReactNode;
	path: string;
	id: number;
	name: string;
}

export default function WelfareCard() {
	const httpInterface = useNetwork((state) => state.httpInterface);
	const location = useLocation(); // 현재 경로 확인
	const navigate = useNavigate(); // 경로 변경에 사용

	const [isGridView, setGridView] = useState(true);
	const [id, setId] = useState<number>(undefined);
	const [index, setIndex] = useState<number>(parseInt(new URLSearchParams(location.search).get('index') || '0', 10));
	const [cards, setCards] = useState<WelfareCardType[]>([]);
	const [loading, setLoading] = useState(true);

	// URL 상태를 기반으로 isGridView 초기화
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		setGridView(searchParams.get('view') !== 'single'); // 'single'이면 false, 그 외엔 true
		setId(parseInt(searchParams.get('id')));
	}, []);

	// isGridView 변경 시 URL 업데이트
	useEffect(() => {
		// 상태 변경 시 URL 업데이트 (상태를 URL로 동기화)

		const searchParams = new URLSearchParams(location.search);
		if (isGridView) {
			searchParams.delete('view'); // 기본 상태
			searchParams.delete('id'); // 기본 상태
		} else {
			searchParams.set('view', 'single'); // 단일 보기
			searchParams.set('index', `${index}`); // 단일 보기
		}

		// URL이 이미 상태와 동기화되어 있다면 navigate 호출을 생략
		const currentSearch = searchParams.toString();
		if (currentSearch !== location.search.slice(1)) {
			navigate({ search: currentSearch }, { replace: true }); // URL만 업데이트
		}
	}, [isGridView]); // isGridView 변경 시에만 실행

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await httpInterface.getWelfarePass();
				console.log(res);

				if (Array.isArray(res.data)) {
					// 배열인 경우 `welfarePass`와 비교하여 해당 항목 선택
					const selectedCards = welfarePass
						.filter((card) => res.data.includes(card.id))
						.map((card) => ({
							element: card.element,
							path: card.path,
							id: card.id,
							name: card.name,
						}));
					setCards(selectedCards);
				} else {
					console.error('Invalid response from API:', res);
				}
			} catch (error) {
				console.error('Error fetching cards:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [httpInterface]);

	const containerAni = {
		init: { opacity: 0, x: '100%' },
		animate: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
	};

	console.log(cards);

	return (
		<PageContainer>
			<div className="pt-3 flex justify-end">
				<div
					onClick={() => {
						setIndex(0);
						setGridView(!isGridView);
					}}
					className="w-8 h-8 flex justify-center items-center">
					{isGridView ? <IconSingleViewToggle /> : <IconGridViewToggle />}
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isGridView ? (
					<motion.div key="gridView" initial="init" animate="animate" exit="exit" variants={containerAni}>
						<div className={`pt-3 grid min-[480px]:grid-cols-3 max-[481px]:grid-cols-2 gap-3`}>
							<GridView cards={cards} setGridView={setGridView} setId={setId} setIndex={setIndex} />
						</div>
					</motion.div>
				) : (
					<motion.div key="singleView" initial="init" animate="animate" exit="exit" variants={containerAni}>
						<div className={`pt-3`}>
							<SingleView id={id} index={index} cards={cards} setId={setId} setIndex={setIndex} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</PageContainer>
	);
}
