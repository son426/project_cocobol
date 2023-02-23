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
    weightBold: number;
    weightRegular: number;
    weightThin: number;

    fontLarge: string;
    fontRegular: string;
    fontSmall: string;
  }

  interface DeviceTheme {
    mobile: string;
    desktop: string;
  }
}
