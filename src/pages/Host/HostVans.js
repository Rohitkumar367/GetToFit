import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'
import { requireAuth } from '../../utils';

export async function loader(){
    let res = await fetch('/api/host/vans');
    let output = await res.json();

    await requireAuth();
    
    return output.vans;
}

const HostVans = () => {

    const vans = useLoaderData();

    const hostVanEls = vans.map((eachVan) => {
        return (
            <Link 
                to={eachVan.id} 
                key={eachVan.id}
                className="host-van-link-wrapper"
            >
                <div className='host-van-single' key={eachVan.id}>
                    <img src={eachVan.imageUrl} alt={`Photo of ${eachVan.name}`} />
                    <div className='host-van-info'>
                        <h3>{eachVan.name}</h3>
                        <p>${eachVan.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <section>
            <h1 className='host-vans-title'>Your listed vans</h1>
            <div className='host-vans-list'>
                {hostVanEls}
            </div>
        </section>
    )
}

export default HostVans
