import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    let exerciseName = name;

    const {user, addToWishlist, error} = useAuthStore();

    const extraDetail=[
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    const handleAddToWishlist = async ()=>{
        if(user){
            const route = window.location.pathname;
            try {
                await addToWishlist(user._id, route, exerciseName);
                toast.success('Added to Wishlist!')
            } catch (e) {
                toast.error(error);
            }
        }else{
            toast.error('You are not logged in!')
        }
    }

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{gap:{lg: '35px', xs:'20px'}}}>

                <Typography textTransform='capitalize' variant='h3'>
                    {name}
                </Typography>

                <Typography variant='h6'>
                    Exercises keep you strong, {name} {' '} is one of the best exercises to target your {target}. It will help you improve your mood and pain energy.
                </Typography>

                {extraDetail.map((item, index)=>(
                    <Stack key={index} direction="row" gap="24px" alignItems="center">

                        <Button sx={{background: "#fff2db", borderRadius:'50%', width:'100px', height:'100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{width: '50px', height:'50px'}}/>
                        </Button>

                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>

                    </Stack>
                ))}

                {/* Add To Wishlist Button */}
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleAddToWishlist}
                    sx={{ marginTop: '20px' }}
                >
                    Add to Wishlist
                </Button>

            </Stack>
        
        </Stack>
    )
}

export default Detail
