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
  const [searchResults, setSearchResults] = useState([]);

  const onChange = (e: any) => {
    hideSearchResult();
    setInputText(e.target.value);
    displaySearchResult(e.target.value);
  };

  const setPosition = async (inputText: string) => {
    testmapapi(inputText)
      .then((data: any) => {
        const location = data.coords;
        setLocPosition(location);
      })
      .catch((error) => {
        console.error("catch error :", error);
      });
  };

  const displaySearchResult = (inputText: string) => {
    testmapapi(inputText)
      .then((data: any) => {
        setSearchResults(data.result);
      })
      .catch((error) => {
        console.error("catch error :", error);
      });
  };

  const hideSearchResult = () => {
    setSearchResults([]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPosition(inputText);
    setInputText("");
  };

  return (
    <>
      <TopBar needWrite={true} needSearch={false} />
      <div>
        <button
          onClick={() => {
            setPosition("고려대로");
          }}
        >
          안암
        </button>
        <button
          onClick={() => {
            setPosition("신촌");
          }}
        >
          연세대
        </button>
      </div>

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
      {/* 검색보조창 */}
      {inputText.length !== 0 ? (
        <>
          <ul>
            {searchResults.map((result: any, index) => {
              console.log(result);
              return (
                <li
                  onClick={() => {
                    setInputText(result.address_name);
                    const location = new window.kakao.maps.LatLng(
                      result.y,
                      result.x
                    );
                    setLocPosition(location);
                    setSearchResults([]);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {result.address_name}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      {/*
       */}
      <MapContainer position={position} />
    </>
  );
}

export default Map;
