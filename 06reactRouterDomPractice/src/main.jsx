import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeadSection } from './Components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadSection/>
  </StrictMode>,
)
