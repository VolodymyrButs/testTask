import React, { useState } from "react";
export const myContext = React.createContext();

export const ContextProvider = (props) => {
  const [viewType, setViewType] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <myContext.Provider
      value={{
        viewType,
        setViewType,
        isDarkTheme,
        setIsDarkTheme,
        isLoading,
        setIsLoading,
        page,
        setPage,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
