import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path : "",
        element: <Home />
      },
       {
        path : "abouts",
        element: <About />
      },
      {
        path : "contacts",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
