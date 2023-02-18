import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
// const TRACKING_ID = "G-SLFM5PBYC6";
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

const RouteChangeTracker = (): any => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // localhost는 기록하지 않음
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID as string);
    setInitialized(true);
    // if (!window.location.href.includes("localhost")) {
    //   ReactGA.initialize(TRACKING_ID as any, { testMode: true });
    //   setInitialized(true);
    // }
  }, []);

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      console.log(`ReactGA.send(pageview) : page : ${location.pathname}`);
      ReactGA.set({ hitType: "pageview", page: location.pathname });
      ReactGA.send("pageview");

      // ReactGA.send({ hitType: "pageview", page: "/my-path" });
    }
  }, [initialized, location]);

  return;
};

export default RouteChangeTracker;
