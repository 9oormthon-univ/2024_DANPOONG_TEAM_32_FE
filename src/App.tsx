import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { debounce } from 'lodash';
import useKakaoLoader from './hooks/useKakaoLoader';
import IconRefresh from './assets/svg/refresh.svg?react';
import IconMyLocation from './assets/svg/my-location.svg?react';

function App() {
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
		<div className="relative w-full h-dvh">
			{/* 검색창 */}
			<div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-12 w-10/12 z-10 bg-white rounded-lg shadow-md p-2 flex items-center">
				<input
					type="text"
					placeholder="Search location..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
					onClick={() => {
						// 검색 이벤트 처리 (추후 추가 가능)
						alert(`Searching for: ${searchQuery}`);
					}}>
					Search
				</button>
			</div>

			{/* 지도 */}
			<Map id="map" className="w-full h-full" center={center} level={3} onCenterChanged={updateCenterWhenMapDragged}>
				{/* 지도에 표시할 내 위치 마커 */}
				<MapMarker position={position} />
			</Map>

			{/* 버튼 */}
			<div className="flex flex-col gap-[10px] absolute z-[1] top-20 right-0 p-[10px]">
				<button className="flex justify-center items-center cursor-pointer rounded-full w-[45px] h-[45px] bg-white shadow-[0_0_8px_#00000025]">
					<IconRefresh width={25} height={25} />
				</button>
				<button
					className="flex justify-center items-center cursor-pointer rounded-full w-[45px] h-[45px] bg-white shadow-[0_0_8px_#00000025]"
					onClick={setCenterToCurrentPosition}>
					<IconMyLocation width={25} height={25} />
				</button>
			</div>
		</div>
	);
}

export default App;
3;
