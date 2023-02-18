import { useEffect, useState } from "react";

function Practice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>{isMobile ? <h1>Mobile content</h1> : <h1>Desktop content</h1>}</div>
  );
}

export default Practice;
