import { useState, createContext } from "react";

type ContextProps = {
  viewType: boolean;
  setViewType: (args: boolean) => void;
  isDarkTheme: boolean;
  setIsDarkTheme: (args: boolean) => void;
  isLoading: boolean;
  setIsLoading: (args: boolean) => void;
  page: number;
  setPage: (args: number) => void;
};

export const myContext = createContext<Partial<ContextProps>>({});

export const ContextProvider = (props: any) => {
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
