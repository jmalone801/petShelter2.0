import React from 'react';
import Button from '@mui/material/Button';

const AddButton = () => {


    return (
        <div>
            <Button 
                href="/pets/new"
                variant="contained"
                style={{ backgroundColor: 'rgb(248, 181, 161)', color: 'inherit' }}
                >Add Pet</Button>
        </div>

    );
};


export default AddButton;