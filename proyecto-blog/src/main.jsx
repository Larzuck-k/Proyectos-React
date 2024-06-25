import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css'
import Login from './login.jsx'
import Index from './index.jsx'
import Register from './register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
  <Routes>

  <Route path="/app" element={<App />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/index" element={<Index />} />
  </Routes>
</BrowserRouter>

  </React.StrictMode>,
)
