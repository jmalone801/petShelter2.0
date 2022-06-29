import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


import Search from './Search';
import AddButton from './AddButton';



const DashBoardNav = (props) => {

    return (
        <Box>
            <AppBar
                position="fixed"
                elevation={2}
                sx={{ backgroundColor: 'rgb(151, 196, 244)' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button href="/">
                        <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'none', color: 'white' }}>
                            Pet Shelter
                        </Typography>
                    </Button>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <Search {...props.searchTerm} />
                            <FavoriteIcon />
                            <AddButton />
                        </Box>
                </Toolbar>
            </AppBar>
        </Box>

    );
}
export default DashBoardNav;
