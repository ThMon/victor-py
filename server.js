const express = require("express");
const app = express();
const stations = require('./data/stations');
const methode_calculs = require('./data/methode_calcul');
const usages = require('./data/usage');
const utils = require('./utils');

app.use(express.static(__dirname + '/public'));
//ici on gère l'affichage des templates front
app.set('views', './views');
app.set('view engine', 'ejs');

//console.log(stations);

// utils.getCegidApi("01089001", "CH", "ME", "19", "2009-01-01", "2021-06-15");

app.get("/", (req, res)=>{
    res.render('home', {stations: stations});
})

app.get("/all", async (req, res)=>{
    const result = []
    for(let i = 0; i < 3; i++) {

        const res =await utils.getCegidApi(stations[i].id, "CH", "ME", "19", "2009-01-01", "2021-06-15");
        result.push(res);
    }
    res.json({result: result})
})

app.listen(3000, ()=>{
    console.log("Server connecté sur port 3000")
})