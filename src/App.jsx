import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './common/Layout/Layout'
import { APP_URL } from './config/urls'
import requireAuth from './common/hoc/requireAuth'
import { Dashboard } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.DASHBOARD} element={requireAuth(Dashboard)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
