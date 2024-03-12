import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  // le path * fonctionne si jamais l'url indiqué ne correspond à rien de déclaré
  <Route path="/*" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
