import React from "react";
import ThemeProvider from "./ThemeProvider";
import GlobalStyle from "./styles";

interface Props {
  children?: React.ReactNode;
}

const StyleGuideWrapper = function ({ children }: Props) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleGuideWrapper;
