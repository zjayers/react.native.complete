import { Platform } from "react-native";

export const fontStyle = Platform.select({
  ios: {
    fontFamily: "Avenir",
  },
  android: {
    fontFamily: "Roboto",
  },
});
