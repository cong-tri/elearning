import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MainProvider } from './context/main-provider.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import "./firebase-config"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import './scss/styles.scss'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <App />
      </MainProvider>
    </QueryClientProvider>
  </StrictMode>,
)
