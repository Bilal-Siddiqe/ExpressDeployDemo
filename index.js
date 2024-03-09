const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const user = [
    {
        name: "Hassan",
        age: 23,
        edu: "BSC"
    }
]

app.get('/', (req, res) => {
    res.status(200).json(user);
});


