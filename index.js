// Creating Server 
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const Port = 5000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

const data = [
    {
        name: "Hanzala",
        id: 35321346,
        mode: true
    },
    {
        name: "ALi",
        id: 35321346,
        mode: false
    }
]
app.get('/', (req, res) => {
    res.status(200).json(data);
})