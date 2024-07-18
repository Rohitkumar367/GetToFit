import {React} from 'react'
import {Link, useLocation, useLoaderData } from 'react-router-dom'

export async function loader({params}){
    let res = await fetch(`/api/vans/${params.id}`);
    let output = await res.json();
    return output.vans
}

const VanDetail = () => {

    const location = useLocation();
    const vanDetail = useLoaderData();

    const search = location.state && (location.state.search || "");
    const type = location.state?.type || "all";


    return (
        <div className='van-detail-container'>
            <Link to={`..${search}`} 
                relative='path'
                className="back-button"
            >
                &larr; <span>Back to {type} vans</span>
            </Link>

            { vanDetail ? (
                <div className='van-detail'>
                    <img src={vanDetail.imageUrl} alt="vanDetail" />
                    <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i> 
                    <h2>{vanDetail.name}</h2>
                    <p className='van-price'><span>${vanDetail.price}</span>/day</p>
                    <p>{vanDetail.description}</p>
                    <button className='link-button'>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail
