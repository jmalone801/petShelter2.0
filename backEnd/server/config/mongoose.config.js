const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Ayee you connected to MongoDB!!!"))
    .catch(err => console.log("You're no longer connected to the database", err));