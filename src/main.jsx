import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './pages/About'
import Books from './pages/Books'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Books" element={<Books />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
