import express from "express";
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));

app.get('/404', (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/../build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);