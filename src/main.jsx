import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import i18n (needs to be bundled ;))
import './i18n.js'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.Suspense fallback='Loading...'>
      <App />
    </React.Suspense>
  </BrowserRouter>
)
