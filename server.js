const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Get files in public directory
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));

// Redirect to default page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Send the 404 page on code 404
app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});