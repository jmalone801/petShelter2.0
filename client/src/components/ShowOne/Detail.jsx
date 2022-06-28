import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from "react-router-dom";

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
            <h1>Pet Shelter</h1>
            <h3>Details about: {pets.name}</h3>
            <p>Pet type: {pets.type}</p>
            <p>Description: {pets.description}</p>
            <p>Skills: {pets.skillOne} {pets.skillTwo} {pets.skillThree}</p>
            <button className="btn btn-success" onClick={(e) => { deleteProduct(pets._id) }}>Adopt {pets.name}</button><br></br><br></br>
            <Link to="/" className="btn btn-primary">Home Page</Link>
        </div>
    )
}

export default Detail;