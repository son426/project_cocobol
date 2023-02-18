export const getLocationByAddress = async (address: string): Promise<any> => {
  console.log("getLocationByAddress/ address :", address);
  const geocoder = new window.kakao.maps.services.Geocoder();

  return await new Promise((resolve) => {
    geocoder.addressSearch(address, function (result: any) {
      resolve(new window.kakao.maps.LatLng(result[0].y, result[0].x));
    });
  });
};

export const searchAndMoveByAddress = (map: any, address: string) => {
  const geocoder = new window.kakao.maps.services.Geocoder();
  geocoder.addressSearch(address, function (result: any, status: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
      map.setCenter(coords);
      console.log("searchAndMoveByAddress/ coords :", coords);
    }
    console.log("searchAndMoveByAddress/ status :", status);
  });
};

export function displayMarker(map: any, locPosition: any, message: string) {
  // 마커를 생성합니다
  var marker = new window.kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  var iwContent = message, // 인포윈도우에 표시할 내용
    iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new window.kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 인포윈도우를 마커위에 표시합니다
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
}

export const markerdata = [
  {
    title: "스터디1",
    lat: 37.5862424118253,
    lng: 127.032902905651,
  },
  {
    title: "스터디2",
    lat: 37.5869824118253,
    lng: 127.030902905651,
  },
  {
    title: "스터디3",
    lat: 37.5869124118253,
    lng: 127.030302905651,
  },
  {
    title: "스터디4",
    lat: 37.5869424118253,
    lng: 127.031902905651,
  },
];
