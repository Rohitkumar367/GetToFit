import React, { useEffect } from 'react' 
import { useAuthStore } from '../store/authStore'
import './WishList.css'
import Spinner from '../components/Spinner'
import { Link, useNavigate } from 'react-router-dom'

const WishList = () => {
    const {user, fetchWishlist, wishlistData, removeFromWishlist, error, isLoading} = useAuthStore();

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async()=>{
            if(user){
                try {
                    await fetchWishlist(user._id)
                } catch (e) {
                    alert(error)
                }
            }
            else{
                alert("user don't exist")
            }
        }

        fetchData();
    },[user, fetchWishlist])

    const handleOpen = (item) =>{
        navigate(`${item.route}`);
    }

    const handleRemoveFromWishlist = async (route)=>{
        try{
            await removeFromWishlist(user._id, route)
        }
        catch(e){
            alert(error)
        }
    }

    return (
        <div className="wishlist-container">

            <h2>Your Wishlist</h2>

            {isLoading ? (
                <Spinner/>
            ) : (
                <div className="wishlist-items">
                    {wishlistData?.routes?.length > 0 ? (
                        wishlistData.routes.map((item, index) => (
                            <div key={index} className="wishlist-item">
                                <p className="exercise-name">
                                    {item.exerciseName}
                                </p>

                                <button
                                    className="wishlist-button open-button"
                                    onClick={()=>handleOpen(item)}
                                >
                                    Open
                                </button>

                                <button
                                    className="wishlist-button remove-button"
                                    onClick={() => handleRemoveFromWishlist(item.route)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No items in your wishlist</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default WishList
