import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import store from './Redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </StrictMode>,
)
