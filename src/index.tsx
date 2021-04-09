import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import App from './App'
import { ContextProvider } from 'contextProvider'

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
