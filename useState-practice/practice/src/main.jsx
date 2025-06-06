import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RenderingLists from './RenderingLists'
import Header from './Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/ >
  </StrictMode>,
)
