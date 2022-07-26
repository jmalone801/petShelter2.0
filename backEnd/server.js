const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// This is where we import the  routes function from our pets.routes.js file
require('./server/config/mongoose.config');

// This is where we import the routes function from our pets.routes.js file
require('./server/routes/pets.routes')(app);


// This needs to at the bottom
const port = 8000;
app.listen(port, () => console.log(`Hey James, its me, your server. Im listening on port: ${port}`));