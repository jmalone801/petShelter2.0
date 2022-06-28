const PetsController = require('../controllers/pets.controller');

module.exports = function (app) {
    // creates one new pet
    app.post('/api/pets/new', PetsController.createPets);

    // Returns all pets
    app.get("/api/pets/all", PetsController.findAllPets);

    // Returns one pet
    app.get('/api/pet/:_id', PetsController.getOnePet);

    // Updates one pet
    app.put("/api/pet/update/:_id", PetsController.updateExistingPet);

    // Deletes one pet
    app.delete("/api/pet/delete/:_id", PetsController.deletePet);
}
