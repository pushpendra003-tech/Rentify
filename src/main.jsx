import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'
import Houses from './Component/Houses/Houses.jsx'
import Listing from './Component/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contactus from './Component/Contactus/Contactus.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='Houses' element={<Houses/>}/>
      <Route path='Listing' element={<Listing/>}/>
      <Route path='Contactus' element={<Contactus/>}/>

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
    <RouterProvider router ={router}/>
    </Usercontext>
  </StrictMode>
)
