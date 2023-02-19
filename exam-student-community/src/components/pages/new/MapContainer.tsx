import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  getLocationByAddress,
  searchAndMoveByAddress,
  markerdata,
  displayMarker,
} from "./mapapi";

interface ILocationProps {
  position: any;
}

const MapContainer = React.memo(({ position }: ILocationProps) => {
  const { kakao } = window;
  const [map, setMap] = useState<any>();
  const [mapCenter, setMapCenter] = useState(position);

  useEffect(() => {
    var mapContainer = document.getElementById("map");
    const mapOptions = {
      center: mapCenter,
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    setMap(map);

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
      infowindow.close();

      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });
    });
  }, [position]);

  useEffect(() => {
    if (map && position) {
      const newCenter = new kakao.maps.LatLng(
        position.getLat(),
        position.getLng()
      );
      map.setCenter(newCenter);
    }
  }, [map, position]);

  return (
    <div
      id="map"
      // ref={mapContainer}
      style={{
        width: "100vw",
        height: "85vh",
      }}
    ></div>
  );
});

export default MapContainer;
