import MapContainer from "./MapContainer";
import { useState } from "react";
import TopBar from "../../molecules/TopBar";
import { getLocationByAddress, testmapapi } from "./mapapi";
import { useRecoilState } from "recoil";
import { atom_place } from "../../../store/atoms";

function Map() {
  const defaultPosition = new window.kakao.maps.LatLng(
    37.5869124118253,
    127.030902905651
  );

  const [inputText, setInputText] = useState("");
  const [position, setLocPosition] = useState<any>(defaultPosition);

  const onChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const testfn = async () => {
      try {
        const location = await testmapapi(inputText);
        console.log(inputText, "submit location :", location);
        setLocPosition(location);
      } catch (error) {
        console.error(error);
      }
    };
    testfn();
    setInputText("");
  };

  return (
    <>
      <TopBar needWrite={true} needSearch={false} />
      <div></div>

      <div>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            placeholder="Search Place..."
            onChange={onChange}
            value={inputText}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <MapContainer position={position} />
    </>
  );
}

export default Map;
