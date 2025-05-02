const express = require ('express');
const querystring = require('querystring');
const mysql2 = require ('mysql2/promise');
const pool = mysql2.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'expo',
    password: 'password',
});


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//async function getNotes() {
//    const [rows] = await pool.query('SELECT * FROM tab1')
//    return rows  }  
//
//const notes = await getNotes()
//console.log(notes)

app.get('/', function (req, res) {
    pool.query('SELECT * FROM tab1').then(function(data) {
        res.json(data);
    });
   
//    res.send("It's working!!!!!!!!!!");


});

app.post('/add', async function (req, res) {
    console.log(req.body);
    const {nam, ag} = req.body;
    await pool.query('INSERT INTO tab1 SET ?',{
        name:nam,
        age:Number(ag)
    });
  // res.redirect('http://truruki.ru/');
});

/*
app.post('/add', function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.nam} - ${request.body.ag}`);    
});
*/

app.listen(30333, ()=> {
    console.log("It's started", new Date());
});
