import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import './SearchExercises.css'

const SearchExercises = () => {
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="2px">

            <Typography fontWeight="700" sx={{ fontSize: {lg : '44px', xs: '30px'}}} mb="10px" textAlign="center" color="#fff">
                Awesome Exercises You Sould Know
            </Typography>

            <Box position="relative" mb="10px">
                <TextField height="76px" value="" onChange={(e) => {}} placeholder='Search Exercises' type='text'
                    sx={{
                        input: {
                            fontWeight: '700', border: 'none', borderRadius: '4px'
                        },
                        width: {lg: '1150px', xs: '350px'},
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        border: 'none'
                        }}
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#ff2526', 
                        color: '#fff',
                        border: '2px solid white',
                        textTransform: 'none',
                        width: {lg: '175px', xs: '80px'},
                        fontSize: {lg: '20px', xs: '14px'},
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                >
                        Search
                </Button>
            </Box>

            SearchExercises

        </Stack>
    )
}

export default SearchExercises
