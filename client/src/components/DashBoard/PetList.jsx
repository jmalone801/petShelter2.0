import axios from 'axios';
import React, { useState, useEffect } from 'react'
import background from "../assets/petBackground.png";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../Footer/footer';


const PetList = (props) => {
    const [pets, setPets] = useState([]);

    // console.log(pets)



    // Displays all pets
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/all')
            .then(res => {
                setPets(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    // Filters data for search bar
    const filteredData = pets.filter((filteredPet) => {
        if (props.input === '') {
            return filteredPet;
        } else {
            return filteredPet.name.toLowerCase().includes(props.input) || filteredPet.type.toLowerCase().includes(props.input)
        }
    })


    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'repeat',
                marginTop: '60px',
            }}>
                <Container sx={{ marginBottom: '100px' }} maxWidth="md">
                    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>There pets are looking for a new home!</h3>
                    <Grid container spacing={4}>
                        {filteredData.map((pets, index) => {
                            return (
                                <Grid item key={index} xs={12} sm={6} md={3}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia 
                                            style={{ height: '200px' }}
                                            image={pets.image || 'https://res.cloudinary.com/jamescloudinaryforphotos/image/upload/v1660004528/petShelterUploads/stmfyh6uzxkt2bmqf01l.png'}
                                            src={pets.image}
                                            alt="Pet" 
                                            prop=""
                                            />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {pets.name}
                                            </Typography>
                                            <Typography>
                                                {pets.type}
                                            </Typography>
                                        </CardContent>
                                        <CardActions style={{ justifyContent: "space-between" }}>
                                            <Button color="secondary" size="small" href={`/pet/` + pets._id}>View</Button>
                                            <Button color="secondary" size="small" href={`/pet/update/` + pets._id}>Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default PetList;