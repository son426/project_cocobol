import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    accentColor: string;
    grayColor: string;
    whiteColor: string;
    blackColor: string;
    device: DeviceTheme;
  }

  interface DeviceTheme {
    mobile: string;
    desktop: string;
  }
}

declare global {
  interface Window {
    kakao: any;
  }
}
