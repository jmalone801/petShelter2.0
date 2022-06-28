const { Pets } = require('../models/pets.model');


// creates one new pet
module.exports.createPets = (request, response) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = request.body;
    Pets.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
};

// Returns all pet
module.exports.findAllPets = (req, res) => {
    Pets.find({})
        .then(allThePets => res.json( allThePets ))
        .catch(err => res.json(err));
};

// Returns one pet
module.exports.getOnePet = (request, response) => {
    Pets.findOne({_id:request.params._id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
};

// Updates one pet
module.exports.updateExistingPet = (req, res) => {
    Pets.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then(updatedPet => res.json( updatedPet ))
        .catch(err => res.json(err));
};

// Deletes one pet
module.exports.deletePet = (req, res) => {
    Pets.deleteOne({ _id: req.params._id })
        .then(confirmDelete => res.json(confirmDelete))
        .catch(err => res.json(err))
}