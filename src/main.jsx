import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Route'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster />
    <ToastContainer />
  </StrictMode>,
)
