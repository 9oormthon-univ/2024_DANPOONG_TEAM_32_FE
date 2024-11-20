import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { debounce } from 'lodash';

import markerImage from '@assets/images/marker.png';

import useKakaoLoader from '@hooks/useKakaoLoader';

// import IconRefresh from './assets/svg/refresh.svg?react';
import IconMyLocation from '@assets/svg/my-location.svg?react';
import useMapStore from '@stores/useMapStore';
import { useFetchPublicOffices } from '@hooks/youthMap/useFetchPublicOffices';

export default function YouthMap() {
	useKakaoLoader();
	const { position, center, ne, sw, setPosition, setCenter, setNE, setSW } = useMapStore();
	const { data, isLoading, isError } = useFetchPublicOffices(ne, sw);

	useEffect(() => {
		navigator.geolocation.watchPosition((pos) => {
			setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});
	}, []);

	// TODO: React Query 기반으로 ne, sw 변경 시 API 호출
	// useEffect(() => {
	// 	console.log('change', ne, sw);
	// }, [ne, sw]);

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

	return (
		<div className="relative w-full h-full flex justify-center">
			{/* 지도 */}
			<div className="relative w-full h-full max-w-[980px]">
				<Map id="map" className="w-full h-full" center={center} level={3} onCenterChanged={updateCenterWhenMapDragged}>
					{/* 지도에 표시할 내 위치 마커 */}
					<MapMarker
						position={position}
						image={{
							src: markerImage,
							size: { width: 35.75, height: 45.5 },
						}}
					/>
				</Map>

				{/* 버튼 */}
				<div className="flex flex-col gap-[10px] absolute z-[1] bottom-20 left-0 p-[10px]">
					<button
						className="flex justify-center items-center cursor-pointer rounded-full w-[45px] h-[45px] bg-white shadow-[0_0_8px_#00000025]"
						onClick={setCenterToCurrentPosition}>
						<IconMyLocation width={25} height={25} />
					</button>
				</div>
			</div>
		</div>
	);
}
