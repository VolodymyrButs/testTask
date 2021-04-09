import { useState, createContext } from "react";

export const AppContext = createContext({
  viewType: false,
  setViewType: (args: boolean) => {},
  isDarkTheme: false,
  setIsDarkTheme: (args: boolean) => {},
  page: 1,
  setPage: (args: number) => {},
});

export const ContextProvider = (props: any) => {
  const [viewType, setViewType] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <AppContext.Provider
      value={{
        viewType,
        setViewType,
        isDarkTheme,
        setIsDarkTheme,
        page,
        setPage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
