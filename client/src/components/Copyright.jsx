import React from 'react'
import { Typography } from '@mui/material'

export default function Copyright() {
    return (
        <Typography variant="body2" color="primary" align="center">
            
            <p>{'Copyright © '} Rohin Sandhu {new Date().getFullYear()}{'.'}</p>
            
        </Typography>
    )
}
