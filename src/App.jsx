import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Training from './pages/Training/Training'
import Events from './pages/Events/Events'
import Analyzes from './pages/Analyzes/Analyzes'
import Policies from './pages/Policies/Policies'
import Endpoints from './pages/Endpoints/Endpoints'
import Vulnerabilities from './pages/Vulnerabilities/Vulnerabilities'
import Capacity from './pages/Capacity/Capacity'
import { useEffect, useState } from 'react'

import 'react-tooltip/dist/react-tooltip.css'
import Inventories from './pages/Inventories/Inventories'
import Applications from './pages/Applications/Applications'

import "react-tooltip/dist/react-tooltip.css";
import Inventories from "./pages/Inventories/Inventories";
import Applications from "./pages/Applications/Applications";
import Others from "./pages/Others/Others";
import OthersLayout from "./Layout/OthersLayout";

function App() {
  const [showLanguage, setShowLanguage] = useState(false)
  const [showDropDownMenu, setShowDropDownMenu] = useState(false)
  const [theme, setTheme] = useState(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const dropdownMenuList = [
    {
      id: 1,
      img1: '/images/category/entities-logo.png',
      title: "Entitie's View",
      path: '/dashboard',
    },
    {
      id: 2,
      img1: '/images/category/entities-logo.png',
      title: 'Training',
      path: '/training',
    },
    {
      id: 3,
      img1: '/images/category/entities-logo.png',
      title: 'Others',
      path: '/training',
    },
  ]

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/'
          element={
            <Layout
              setShowDropDownMenu={setShowDropDownMenu}
              showDropDownMenu={showDropDownMenu}
              handleThemeSwitch={handleThemeSwitch}
              showMobileMenu={showMobileMenu}
              theme={theme}
              showLanguage={showLanguage}
              setShowLanguage={setShowLanguage}
              setShowMobileMenu={setShowMobileMenu}
              dropdownMenuList={dropdownMenuList}
            />
          }
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='training' element={<Training />} />
          <Route path='events' element={<Events />} />
          <Route path='analyzes' element={<Analyzes />} />
          <Route path='policies' element={<Policies />} />
          <Route path='endpoints' element={<Endpoints />} />
          <Route path='vulnerabilities' element={<Vulnerabilities />} />
          <Route path='capacity' element={<Capacity />} />
          <Route path='inventories' element={<Inventories />} />
          <Route path='applications' element={<Applications />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
