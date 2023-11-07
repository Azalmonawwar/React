import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Details from './Details.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<App />} />
        <Route path="/product/:productId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
