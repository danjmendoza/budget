import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Page2 from './components/Page2'
import NotFoundPage from './components/NotFoundPage'

import './App.css'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link> | <Link className="App-link" to="page2">Page 2</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
