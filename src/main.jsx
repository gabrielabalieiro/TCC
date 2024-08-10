import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Nav from './pages/Nav.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Home/>
    <Footer/>
  </StrictMode>
)
