import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import {
    about,
    resume,
    social,
    sendEmail
} from './api';
import config from './config'

const app = express();

process.env.PWD = process.cwd();

app.use(express.static(path.join(process.env.PWD, 'dist/client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/about', about);
app.get('/api/resume', resume);
app.get('/api/social', social);
app.post('/api/sendEmail', sendEmail);

app.listen(config.port, function() {
    console.log('Server is listening on port %d', config.port);
});
