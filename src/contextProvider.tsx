import React, { useState, createContext, useEffect } from 'react'
import { loadState, saveState } from 'localStorage'

export const AppContext = createContext({
    viewType: false,
    setViewType: (arg: boolean) => {
        arg
    },
    isDarkTheme: false,
    setIsDarkTheme: (arg: boolean) => {
        arg
    },
})

export const ContextProvider = (props: { children: JSX.Element }) => {
    const [viewType, setViewType] = useState(
        loadState() ? loadState().view : false
    )
    const [isDarkTheme, setIsDarkTheme] = useState(
        loadState() ? loadState().dark : false
    )

    useEffect(() => saveState({ view: viewType, dark: isDarkTheme }), [
        viewType,
        isDarkTheme,
    ])

    return (
        <AppContext.Provider
            value={{
                viewType,
                setViewType,
                isDarkTheme,
                setIsDarkTheme,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
