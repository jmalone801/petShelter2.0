import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";


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
            <h1>Pet Shelter</h1>
            <h3>Edit {name}</h3>
            <form onSubmit={updatePet}>
                <p>
                    <label>Pet Name: </label><br />
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
                    <p className='danger'>{errors.name ? errors.name.message : ""}</p>
                </p>
                <p>
                    <label>Pet Type: </label><br />
                    <input type="text" onChange={(event) => setType(event.target.value)} value={type} />
                    <p className='danger'>{errors.type ? errors.type.message : ""}</p>
                </p>
                <p>
                    <label>Pet Description: </label><br />
                    <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />
                    <p className='danger'>{errors.description ? errors.description.message : ""}</p>
                </p>
                <hr/>
                <h6>Skills (Optional)</h6>
                <p>
                    <label>Skill One: </label><br />
                    <input type="text" onChange={(event) => setSkillOne(event.target.value)} value={skillOne} />
                </p>
                <p>
                    <label>Skill Two: </label><br />
                    <input type="text" onChange={(event) => setSkillTwo(event.target.value)} value={skillTwo} />
                </p>
                <p>
                    <label>Skill Three: </label><br />
                    <input type="text" onChange={(event) => setSkillThree(event.target.value)} value={skillThree} />
                </p>
                <input className="btn btn-success" type="submit" />
            </form><br></br>
            <Link className="btn btn-primary" to="/">Home Page</Link>
        </div>
    )


}
export default Update;