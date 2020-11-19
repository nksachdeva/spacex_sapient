const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
