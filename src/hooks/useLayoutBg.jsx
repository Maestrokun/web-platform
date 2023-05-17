import React, { createContext, useContext, useState } from "react";

const LayoutBgContext = createContext();

export function useLayoutBG() {
  const context = useContext(LayoutBgContext);
  if (!context) {
    throw Error(`Context cannot be used outside it's provider`);
  }
  return context;
}

// eslint-disable-next-line react/prop-types
export function LayoutBGProvider({ children }) {
  const [bgColor, setBgColor] = useState("#fff");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LayoutBgContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </LayoutBgContext.Provider>
  );
}
