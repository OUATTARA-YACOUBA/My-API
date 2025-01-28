const { Client }=require('pg');
const { host, database, user, password } = require('pg/lib/defaults');

const client = new Client({
    host: 'localhost',
    port:5432,
    database:'',
    user: 'postgres',
    password:'admin'
});

//fonction de connection de l'application à mongoDb
client.connect((err)=>{
    if(err){
        console.error('connection to data base failed !', err.stack)
    }else{
        console.log('Data base connected ! ' )
    }
});

module.exports=client;  