import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

interface Props {
  children: any;
}

export default ({ children }: Props) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export const Inverted = ({ children }: Props) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);
