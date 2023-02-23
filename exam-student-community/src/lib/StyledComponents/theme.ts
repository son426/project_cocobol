import { DefaultTheme, DeviceTheme } from "styled-components";

export const deviceSizes: DeviceTheme = {
  mobile: "800px",
  desktop: "801px",
};

export const theme: DefaultTheme = {
  bgColor: "white",
  accentColor: "#5928E5",
  grayColor: "#A4A4A4",
  whiteColor: "white",
  blackColor: "black",
  device: {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    desktop: `screen and (min-width: ${deviceSizes.desktop})`,
  },

  weightBold: 700,
  weightRegular: 500,
  weightThin: 300,

  fontLarge: "24px",
  fontRegular: "20px",
  fontSmall: "16px",
};
