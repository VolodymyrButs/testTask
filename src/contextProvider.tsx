import React, { useState, createContext, useEffect } from 'react'
import { loadState, saveState } from 'localStorage'
import { VIEW_TYPE_ICONS } from 'components/constants'

export const AppContext = createContext({
  viewType: VIEW_TYPE_ICONS,
  setViewType: (arg: string) => {
    arg
  },
  isDarkTheme: false,
  setIsDarkTheme: (arg: boolean) => {
    arg
  },
})

const initialSettings = loadState()
export const ContextProvider = (props: { children: JSX.Element }) => {
  const [viewType, setViewType] = useState(
    initialSettings.viewType || VIEW_TYPE_ICONS
  )
  const [isDarkTheme, setIsDarkTheme] = useState(
    initialSettings.isDarkTheme || false
  )

  useEffect(() => saveState({ viewType, isDarkTheme }), [viewType, isDarkTheme])

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
