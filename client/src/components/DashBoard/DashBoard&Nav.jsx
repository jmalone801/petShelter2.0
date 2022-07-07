import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


import AddButton from '../Nav/AddButton';
import PetList from './PetList';



const DashBoardNav = () => {
    const [inputText, setInputText] = useState("");


    const inputHandler = (event) => {
        //convert input text to lower case
        const lowerCase = event.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
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
                            <TextField onChange={inputHandler} />


                            <Search>
                                <SearchIconWrapper >
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    // onChange={inputHandler}
                                />
                            </Search>


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
