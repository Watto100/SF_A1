const express = require("express")
const app = express();

// import { routes } from './routes';
// const routes = require("./routes");


const http = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors")

var fs = require('fs');
const formidable = require('formidable');


// app.use(bodyParser.json());

app.use(express.json());


app.use(cors({
    origin: "*",
    // methods: ['GET', 'Put', 'Post'],
    credential: true,

}));


app.get('/', (req, res) => {
    res.send([{message: 'hello wolrd'}]);
})


// require('./routes/api-login.js')(app,path,fs);



app.listen(3000, () =>{
    console.log('Server is now listening on port 3000');
})

