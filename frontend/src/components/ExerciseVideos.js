import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import Spinner from './Spinner'

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if(!exerciseVideos.length){
        return <Spinner/>
    }

    return (
        <Box sx={{marginTop:{lg: '200px', xs: '20px'}}} p="20px">

            <Typography variant='h3' mb="33px">
                Watch <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
            </Typography>

            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems='center'
                sx={{
                    flexDirection: {lg:'row'},
                    gap:{lg: '50px', xs:'0'}
                }}
            >
                {exerciseVideos?.slice(0, 4).map((item, index)=>(
                    <a key={index} className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box>
                            <Typography sx={{ fontSize: { lg: '30px', xs: '20px' } }} fontWeight={600} color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography fontSize="14px" color="gray">
                                YT Channel - {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>

        </Box>
    )
}

export default ExerciseVideos
