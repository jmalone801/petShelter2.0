import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css';

import AddButton from '../Nav/AddButton';
import PetList from './PetList';


const DashBoardNav = () => {
    const [inputText, setInputText] = useState("");

    const inputHandler = (event) => {
        //convert input text to lower case
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    return (
        <div>
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
                            <div class="wrapper">
                                <SearchIconWrapper >
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <input class="search" placeholder="Search..." type="text" onChange={inputHandler} />
                            </div>
                            <FavoriteIcon />
                            <AddButton />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <PetList input={inputText} />
        </div>
    );
}
export default DashBoardNav;
