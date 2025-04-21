import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Sidebar />
  </StrictMode>
)
