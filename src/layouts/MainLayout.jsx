import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../common/Header'
import Newsletter from '../common/Newsletter'
import Footer from '../common/Footer'

const MainLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true, throttleDelay: 99, debounceDelay: 50 })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    AOS.refreshHard()
  }, [pathname])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Newsletter />
      <Footer />
    </Box>
  )
}

export default MainLayout
