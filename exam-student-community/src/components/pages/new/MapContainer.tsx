import { useEffect, useRef } from "react";
import {
  getLocationByAddress,
  searchAndMoveByAddress,
  markerdata,
  displayMarker,
} from "./mapapi";

interface ISearchPlaceProps {
  searchPlace: string;
}

function MapContainer({ searchPlace }: ISearchPlaceProps) {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const mapOptions = {
    center: new kakao.maps.LatLng(37.5869124118253, 127.030902905651),
    level: 3,
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    // // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    // if (navigator.geolocation) {
    //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     var lat = position.coords.latitude, // 위도
    //       lon = position.coords.longitude; // 경도

    //     var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    //       message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다

    //     // 마커와 인포윈도우를 표시합니다
    //     displayMarker(map, locPosition, message);
    //   });
    // } else {
    //   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    //   var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
    //     message = "geolocation을 사용할수 없어요..";

    //   displayMarker(map, locPosition, message);
    // }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다

    if (searchPlace) {
      searchAndMoveByAddress(map, searchPlace);
    }

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });

      var infowindow = new kakao.maps.InfoWindow({
        map: map, // 인포윈도우가 표시될 지도
        position: new kakao.maps.LatLng(el.lat, el.lng),
        content: `<div style="padding:5px;">${el.title}</div>`,
        removable: true,
      });

      marker.setMap(map);
      infowindow.open(map, marker);

      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });
    });
  }, [searchPlace]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100vw",
        height: "85vh",
      }}
    ></div>
  );
}

export default MapContainer;
