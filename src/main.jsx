import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/contactUs/ContactUS.jsx';
import About from './pages/About/About.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
)
