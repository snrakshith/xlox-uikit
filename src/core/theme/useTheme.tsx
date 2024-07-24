import * as React from "react";
import { XloxBaseContext } from "./XloxBaseContext";

export const useTheme = () => {
  return React.useContext(XloxBaseContext);
};
