import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const FormNav = () => {
    return (
        <Box>
            <AppBar
                position="fixed"
                elevation={2}
                sx={{ backgroundColor: '#5e8cba' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button href="/">
                        <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'none', color: 'white' }}>
                            Pet Shelter
                        </Typography>
                    </Button>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        </Box>
                </Toolbar>
            </AppBar>
        </Box>

    );
}
export default FormNav;
