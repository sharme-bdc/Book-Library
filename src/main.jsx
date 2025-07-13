import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './pages/About'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Settings from './pages/Settings'
import LogOut from './pages/LogOut'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FontEndLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<Layout />}>
          
          <Route path="/about" element={<About />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/logout' element={<LogOut />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
