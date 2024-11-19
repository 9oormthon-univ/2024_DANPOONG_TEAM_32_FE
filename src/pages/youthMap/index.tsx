import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { debounce } from 'lodash';

import useKakaoLoader from '@hooks/useKakaoLoader';

// import IconRefresh from './assets/svg/refresh.svg?react';
import IconMyLocation from '@assets/svg/my-location.svg?react';

export default function YouthMap() {
	useKakaoLoader();
	const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
	const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});

		navigator.geolocation.watchPosition((pos) => {
			setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});
	}, []);

	const setCenterToCurrentPosition = () => {
		setCenter(position);
	};

	const updateCenterWhenMapDragged = useMemo(
		() =>
			debounce((map: kakao.maps.Map) => {
				console.log(map.getCenter());
				setCenter({
					lat: map.getCenter().getLat(),
					lng: map.getCenter().getLng(),
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
					<MapMarker position={position} />
				</Map>

				{/* 버튼 */}
				<div className="flex flex-col gap-[10px] absolute z-[1] bottom-20 left-0 p-[10px]">
					{/* <button className="flex justify-center items-center cursor-pointer rounded-full w-[45px] h-[45px] bg-white shadow-[0_0_8px_#00000025]">
					<IconRefresh width={25} height={25} />
				</button> */}
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
