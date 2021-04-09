import React, { useState, createContext } from 'react'

export const AppContext = createContext({
    viewType: false,
    setViewType: (arg: boolean) => {
        arg
    },
    isDarkTheme: false,
    setIsDarkTheme: (arg: boolean) => {
        arg
    },
    page: 1,
    setPage: (arg: number) => {
        arg
    },
})

export const ContextProvider = (props: { children: JSX.Element }) => {
    const [viewType, setViewType] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [page, setPage] = useState(1)
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
    )
}
