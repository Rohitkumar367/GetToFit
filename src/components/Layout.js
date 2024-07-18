import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className='site-wrapper'>
            <Header></Header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout
