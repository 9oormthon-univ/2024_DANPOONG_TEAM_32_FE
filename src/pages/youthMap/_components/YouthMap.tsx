import { useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { debounce } from 'lodash';

import markerImage from '@assets/images/marker.png';
import RefreshIcon from '@assets/svg/refresh.svg?react';
import IconMyLocation from '@assets/svg/my-location.svg?react';

import useKakaoLoader from '@hooks/useKakaoLoader';
import { useFetchPublicOffices } from '@hooks/youthMap/useFetchPublicOffices';
import useMapStore from '@stores/useMapStore';

import { PublicOfficeDataType } from '@type/publicOfficeData.type';
import { AnimatePresence, motion } from 'motion/react';
import Icon from '@components/Icon';

export default function YouthMap() {
	useKakaoLoader();
	const mapRef = useRef<kakao.maps.Map>(null);
	const { position, center, ne, sw, setPosition, setCenter, setNE, setSW } = useMapStore();
	const { data, isLoading, isError, refetch } = useFetchPublicOffices(ne, sw);

	const [selectedMarker, setSelectedMarker] = useState<PublicOfficeDataType>();
	const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

	useEffect(() => {
		// 사용자 현재 위치 받아오기
		navigator.geolocation.watchPosition((pos) => {
			setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});
	}, []);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;

		setSW({
			lat: map.getBounds().getSouthWest().getLat(),
			lng: map.getBounds().getSouthWest().getLng(),
		});
		setNE({
			lat: map.getBounds().getNorthEast().getLat(),
			lng: map.getBounds().getNorthEast().getLng(),
		});
	}, [mapRef.current]);

	const setCenterToCurrentPosition = () => {
		setCenter(position);
	};

	const updateCenterWhenMapDragged = useMemo(
		() =>
			debounce((map: kakao.maps.Map) => {
				console.log(map.getCenter());
				console.log(map.getBounds().getNorthEast());
				console.log(map.getBounds().getSouthWest());
				setCenter({
					lat: map.getCenter().getLat(),
					lng: map.getCenter().getLng(),
				});
				setNE({
					lat: map.getBounds().getNorthEast().getLat(),
					lng: map.getBounds().getNorthEast().getLng(),
				});
				setSW({
					lat: map.getBounds().getSouthWest().getLat(),
					lng: map.getBounds().getSouthWest().getLng(),
				});
			}, 500),
		[],
	);

	const handleMarkerClick = (markData: PublicOfficeDataType) => {
		setSelectedMarker(markData);
		console.log(markData);
		setIsInfoWindowOpen(true);
	};

	const closeInfoWindow = () => {
		setIsInfoWindowOpen(false);
	};

	return (
		<div className="relative w-full h-full flex justify-center">
			{/* 지도 */}
			{/* <div className="relative w-full h-full max-w-[980px]"> */}
			<Map
				id="map"
				className="w-full h-full"
				ref={mapRef}
				center={center}
				level={6}
				onCenterChanged={updateCenterWhenMapDragged}>
				{/* 지도에 표시할 내 위치 마커 */}
				<MapMarker
					position={position}
					image={{
						src: markerImage,
						size: { width: 35.75, height: 45.5 },
					}}
				/>

				{data?.data.map((item) => (
					<MapMarker
						key={item.publicOfficeName}
						position={{ lat: item.latitude, lng: item.longitude }}
						onClick={() => handleMarkerClick(item)}
						image={{
							src: markerImage,
							size: { width: 35.75, height: 45.5 },
						}}
					/>
				))}
			</Map>

			{/* 버튼 */}
			<div className="flex flex-col gap-[10px] absolute z-[1] bottom-20 left-0 p-[10px]">
				<button
					className="flex justify-center items-center cursor-pointer rounded-full w-[45px] h-[45px] bg-white shadow-[0_0_8px_#00000025]"
					onClick={setCenterToCurrentPosition}>
					<IconMyLocation width={25} height={25} />
				</button>
			</div>

			<div className="absolute z-[1] top-3">
				<button
					className="flex items-center bg-theme-main text-white px-2 py-1 opacity-80 rounded-[10px]"
					onClick={() => refetch()}>
					<RefreshIcon width={20} height={20} color="white" /> <span className="ml-2">이 지역 재검색</span>
				</button>
			</div>
			{/* </div> */}
			{/* 하단 패널 */}
			<AnimatePresence>
				{isInfoWindowOpen && selectedMarker?.latitude && selectedMarker?.longitude && (
					<motion.div
						className="absolute z-[1] bottom-0 left-0 w-full bg-white p-4"
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						exit={{ y: 150 }}
						transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
						<div className="flex flex-col justify-center items-center">
							<button onClick={closeInfoWindow}>닫기</button>
							<h1 className="text-lg font-bold">{selectedMarker.publicOfficeName}</h1>
							<p>
								<Icon name="CallIcon" />
								{selectedMarker.roadAddress}
							</p>
							<p>{selectedMarker.phoneNumber}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
