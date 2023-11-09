import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Details from './Details.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<App />} />
          <Route path="/product/:productId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
