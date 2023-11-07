import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserContextProvider from './context/UserContext.jsx'
import Login from './Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
