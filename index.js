const express = require('express');
const cors = require('cors');
const PORT = 9002;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
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


