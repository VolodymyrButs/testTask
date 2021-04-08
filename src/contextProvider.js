import React, { useState } from "react";
export const myContext = React.createContext();

const ContextProvider = (props) => {
  const [viewType, setViewType] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <myContext.Provider
      value={{
        viewType,
        setViewType,
        isDarkTheme,
        setIsDarkTheme,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ContextProvider;
