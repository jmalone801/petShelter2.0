import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


import AddButton from './AddButton';


const DashBoardNav = ({ searchQuery }) => {
    // const [searchTerm, setSearchTerm] = useState(pets)


    // Search styling begin ============================================================================
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '40px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
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
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '40px',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    // Search styling end ============================================================================





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
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                onChange={searchQuery}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <FavoriteIcon />
                        <AddButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    );
}
export default DashBoardNav;
