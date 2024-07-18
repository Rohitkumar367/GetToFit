import React from 'react'
import {Link, Outlet, NavLink, useLoaderData} from 'react-router-dom'
import { requireAuth } from '../../utils';


export async function loader({params}){
    let res = await fetch(`/api/host/vans/${params.id}`);
    let output = await res.json();

    await requireAuth();
    
    return output.vans
}


const HostVanDetail = () => {

    const inlineStyle  = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const currentVan = useLoaderData();

    return (
        <section>
            <Link to=".." 
                relative='path'
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>

            <div className='host-van-detail-layout-container'>
            
                <div className='host-van-detail'>
                    <img src={currentVan.imageUrl} width={150}/>
                    <div>
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h2>{currentVan.name}</h2>
                        <p className='van-price'>${currentVan.price}/day</p>
                    </div>
                </div>

                <nav className='host-van-detail-nav'>
                    <NavLink to='.' end
                        style={({isActive})=> isActive ? inlineStyle : null}
                    >
                        Details
                    </NavLink>

                    <NavLink to='pricing'
                        style={({isActive})=> isActive ? inlineStyle : null}                    
                    >
                        Pricing
                    </NavLink>

                    <NavLink to='photos'
                        style={({isActive})=> isActive ? inlineStyle : null}
                    >
                        Photo
                    </NavLink>
                </nav>

                <Outlet context={{currentVan}}/>

            </div>

        </section>
    )
}

export default HostVanDetail
