// Importing required modules
const express = require('express');
const cors = require('cors')

// Creating an Express application
const app = express();
app.use(cors());
app.use(express.json());

// Users array
const user = [
    {
        name: "Hassan",
        age: 23,
        edu: "BSC"
    }
]


// Define a route for GET requests
app.get('/', (req, res) => {
    // Send response with "Hy" message
    res.status(200).json(user);
});

// Starting the server
const port = 5000; // You can use any port you prefer
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
