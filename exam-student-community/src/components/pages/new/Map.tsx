import MapContainer from "./MapContainer";
import { useState } from "react";
import TopBar from "../../molecules/TopBar";

function Map() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <TopBar needWrite={true} needSearch={false} />
      <button>필터 설정</button>
      <button>현재 위치로</button>

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
      <MapContainer searchPlace={place} />
    </>
  );
}

export default Map;
