import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Vans , {loader as vansLoader} from './pages/Vans/Vans'
import "./server"
import VanDetail, {loader as vanDetailLoader} from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Hostlayout from './components/Hostlayout'
import Dashboard from './pages/Host/Dashboard'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos' 
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login from './pages/Login'

// imported requreAuth function from utils.js to check user is loged in or not
import { requireAuth } from './utils'

// we are gonna protect our private route, by using loader function in each child route of hostRoute

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>

    <Route index element={<Home/>}/>

    <Route path='about' element={<About/>}/>

    {/* Login Route */}
    <Route path='login' element={<Login/>}/>

    <Route 
      path='vans' 
      element={<Vans/>} 
      loader={vansLoader} 
      errorElement={<Error/>} 
    />

    <Route 
      path='vans/:id' 
      element={<VanDetail/>}
      loader={vanDetailLoader}
      errorElement={<Error/>}
    />

    {/* Host section starts */}
    <Route path='host' element={<Hostlayout/>}>
      <Route 
        index 
        element={<Dashboard/>}
        loader={ async () => {
          return await requireAuth()
      }}
      />
      <Route 
        path='income' 
        element={<Income/>}
        loader={async () => {
          return await requireAuth()
        }}
      />

      <Route 
        path='reviews' 
        element={<Reviews/>}
        loader={async () => {
          return await requireAuth()
        }} 
      />

      <Route 
        path='vans' 
        element={<HostVans/>}
        loader={hostVansLoader}
        errorElement={<Error/>}
      />
      <Route 
        path='vans/:id' 
        element={<HostVanDetail/>}
        loader={hostVanDetailLoader}
        errorElement={<Error/>}
      >
        <Route 
          index 
          element={<HostVanInfo/>}
          loader={async () => {
            return await requireAuth()
        }}
        />
        <Route 
          path='pricing' 
          element={<HostVanPricing/>}
          loader={async () => {
            return await requireAuth()
        }}
        />
        <Route 
          path='photos' 
          element={<HostVanPhotos/>}
          loader={async () => {
            return await requireAuth()
        }}

        />
      </Route>

    </Route>
    {/* Host section ends */}

    <Route path="*" element={<NotFound/>}/>

  </Route>
))

const App = () => {
  return (
    <div className='app'>

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
