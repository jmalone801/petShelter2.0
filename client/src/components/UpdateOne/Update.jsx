import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import background from "../assets/petBackground.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import FormNav from '../Nav/FormNav';
import Footer from '../Footer/footer';


const Update = (props) => {
    const { _id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    // Retrieves one single pet by id
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + _id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch(err => console.error(err));
    }, [_id]);

    // Updates one single pet by id
    const updatePet = event => {
        event.preventDefault();
        axios.put('http://localhost:8000/api/pet/update/' + _id, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
        // Displays validiations for edit
        .then(res => {
            console.log(res)
            if(res.data.errors) {
                setErrors(res.data.errors)
            }
            else {
                history.push("/")
            }
        })
        .catch(err => console.log(err))
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
                    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>Make changes to {name}</h3>
                    <Paper
                        elevation={2}
                        style={{
                            width: '600px',
                            padding: 20,
                            marginBottom: '100px',
                            backgroundColor: "rgb(247 247 247 / 87%)"
                        }}>
                        <form onSubmit={updatePet}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                columnGap: '80px'
                            }} >
                                <h5 style={{ textAlign: 'left' }}>Pet Information</h5>
                                <TextField
                                    label="Pet Name"
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    onChange={(event) => setName(event.target.value)} value={name} />
                                <p className='danger'>{errors.name ? errors.name.message : ""}</p>
                                <TextField
                                    label="Pet Type"
                                    type="text" variant="filled"
                                    fullWidth
                                    onChange={(event) => setType(event.target.value)} value={type} />
                                <p className='danger'>{errors.type ? errors.type.message : ""}</p>
                                <TextField
                                    label="Pet Description"
                                    type="text"
                                    variant="filled"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    onChange={(event) => setDescription(event.target.value)} value={description} />
                                <p className='danger'>{errors.description ? errors.description.message : ""}</p>
                                <hr />
                                <h5 style={{ textAlign: 'left' }}>Pet Skills <span style={{ color: 'grey' }} >(Optional)</span></h5>
                                <TextField
                                    label="Skill One"
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    onChange={(event) => setSkillOne(event.target.value)} value={skillOne} />
                                <p></p>
                                <TextField
                                    label="Skill Two"
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    onChange={(event) => setSkillTwo(event.target.value)} value={skillTwo} />
                                <p></p>
                                <TextField
                                    label="Skill Three"
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    onChange={(event) => setSkillThree(event.target.value)} value={skillThree} />
                                <p></p>
                                {/* <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => { console.log(event.target.files[0]); setImage(event.target.files[0]) }} /> */}
                                <br></br>
                                <div style={{ display:'flex', justifyContent:'space-between' }}>
                                    <Button
                                        href="/"
                                        variant="text"
                                        style={{ color:'grey' }}>Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{ backgroundColor: 'rgb(248, 181, 161)', width:'140px' }}>Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div>
            <Footer />
        </div>
    )


}
export default Update;