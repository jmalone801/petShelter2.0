import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import background from "../assets/petBackground.png";
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import FormNav from '../Nav/FormNav';
import Footer from '../Footer/footer';

const Detail = (props) => {
    const [pets, setPets] = useState({})
    const { _id } = useParams();
    const history = useHistory();

    // Retrieves one single item by id
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + _id)
            .then(res => setPets(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    // Deletes one pet
    const deleteProduct = (_id) => {
        axios.delete('http://localhost:8000/api/pet/delete/' + _id)
            .then(res => {
                history.push("/")
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <FormNav />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'repeat',
                marginTop: '60px',
            }}>

                <div>
                    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold', color: '#474747' }}>You are now viewing {pets.name}</h3>
                    <Paper
                        elevation={2}
                        style={{
                            width: '600px',
                            padding: 20,
                            marginBottom: '100px',
                            backgroundColor: "rgb(247 247 247 / 87%)"
                        }}>
                        <h3>Pet Name: {pets.name}</h3>
                        <p>Pet Type: {pets.type}</p>
                        <p>Description: {pets.description}</p>
                        <p>Skills: {pets.skillOne} {pets.skillTwo} {pets.skillThree}</p>
                        <img
                            style={{ width: '200px' }}
                            src={pets.image || 'https://res.cloudinary.com/jamescloudinaryforphotos/image/upload/v1660004528/petShelterUploads/stmfyh6uzxkt2bmqf01l.png'}
                            alt="Preview"
                        />
                        <br></br><br></br>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                href="/"
                                variant="text"
                                style={{ color: 'grey' }}>Cancel
                            </Button>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#f2b01c' }}
                                onClick={(e) => { deleteProduct(pets._id) }}>Adopt {pets.name}
                            </Button>
                        </div>
                    </Paper>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail;