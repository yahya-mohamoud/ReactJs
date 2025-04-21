import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lists from './Lists'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lists />
  </StrictMode>
)
