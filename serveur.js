//creation d'un serveur

const express = require('express');
const app = express();

//creation de point de terminaison
app.get('/', (req,res)=>{
    console.log('Ma page Web');    

});

app.listen(3000,()=>{
    console.log('Attente de requête au port 3000')
});

module.exports = app;
