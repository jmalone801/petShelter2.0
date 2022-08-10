import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import background from "../assets/petBackground.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import FormNav from '../Nav/FormNav';
import Footer from '../Footer/footer';


const PetForm = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [cloudinary_id, setCloudinary_id] = useState(null);
    const [spinner, setSpinner] = useState(true);
    const [errors, setErrors] = useState({});
    const history = useHistory();


    // Handles image preview
    const handleOnChange = (event) => {
        const reader = new FileReader();
        reader.onload = function (onLoadEvent) {
            setFile(onLoadEvent.target.result);
            setImage(null)
            setCloudinary_id(null)
        }
        reader.readAsDataURL(event.target.files[0]);
    }


    //handler when the form is submitted
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        // Checks if user uploaded a file
        // If user did upload a file, it POSTs both Axios calls
        if (file != null) {
            // Starts spinner
            setSpinner(false)
            // Sets up image to be sent to Cloudinary
            const formData = new FormData();
            formData.append('file', file)
            formData.append('upload_preset', 'petShelter')
            // Uploading the image to Cloudinary
            const result = await axios.post('https://api.cloudinary.com/v1_1/jamescloudinaryforphotos/upload', formData)

            // Packages data to send into database
            const imageData = {
                image: result.data.secure_url,
                cloudinary_id: result.data.public_id
            }

            // Sends all data to database
            axios.post('http://localhost:8000/api/pets/new', {
                name,
                type,
                description,
                skillOne,
                skillTwo,
                skillThree,
                ...imageData
            })
                // console.log(imageData)
                // Displays validiations
                .then(res => {
                    console.log(res)
                    if (res.data.errors) {
                        setErrors(res.data.errors)
                    }
                    // Clears input fields
                    else {
                        setName("")
                        setType("")
                        setDescription("")
                        setSkillOne("")
                        setSkillTwo("")
                        setSkillThree("")
                        setErrors("")
                        history.push("/")
                    }
                })
                .catch(err => console.log(err))
                // Stops spinner
                setSpinner(true)

            // If user did NOT upload file, it only POSTs the following Axios call
        } else {
            // Sends all data to database
            axios.post('http://localhost:8000/api/pets/new', {
                name,
                type,
                description,
                skillOne,
                skillTwo,
                skillThree
            })
                // Displays validiations
                .then(res => {
                    console.log(res)
                    if (res.data.errors) {
                        setErrors(res.data.errors)
                    }
                    // Clears input fields
                    else {
                        setName("")
                        setType("")
                        setDescription("")
                        setSkillOne("")
                        setSkillTwo("")
                        setSkillThree("")
                        setErrors("")
                        history.push("/")
                    }
                })
                .catch(err => console.log(err))
            console.log(image)
            console.log(cloudinary_id)
        }
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
                    <h3 style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold', color: '#474747' }}>Know a pet in need of a good home?</h3>
                    <Paper
                        elevation={2}
                        style={{
                            width: '600px',
                            padding: 20,
                            marginBottom: '100px',
                            backgroundColor: "rgb(247 247 247 / 87%)"
                        }}>
                        <form onSubmit={onSubmitHandler}>
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

                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleOnChange}
                                />
                                <br></br>

                                {/* Hides img is no file is presents */}
                                {file?<div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={file} alt="Preview" style={{ width: '200px' }} />
                                </div>:<div></div>}


                                <br></br>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button
                                        href="/"
                                        variant="text"
                                        style={{ color: 'grey' }}>Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{ backgroundColor: '#f2b01c', width: '140px' }}>Submit
                                    </Button>
                                    {spinner ? spinner : <Backdrop style={{ color: '#fff', }}  open>
                                        <CircularProgress color="inherit" />
                                    </Backdrop>}
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

export default PetForm;