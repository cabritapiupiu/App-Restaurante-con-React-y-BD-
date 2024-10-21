const express = require('express');
const mysql =require('mysql2');
const api =express();
require('dotenv').config();
api.use(express.json());
const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect((error)=>{
    if(error){
        console.error('Eror al conectar:',error);
        return;
    }
    console.log('Conexion exitosa');
})
api.get('/',(request, results)=>{
    results.send("<h1>Api con express</h1>")
})

api.get('/estado', (request,results)=>{
    db.query("SELECT * FROM restaurante__estado",(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.json(resultados);
    });

});

api.post('/register', (request,results)=>{
    const {nick} = request.body; 
    const {name} = request.body; 
    const {surname} = request.body; 
    const {email} = request.body; 
    const {pass} = request.body; 
    // const fecha = new Date();
    // const hoy = fecha.getDate(); 
    // const {created_at} = hoy; 
    db.query('CALL set_register ( nick,name,surname,email,pass,created_at) VALUES (?)',[nick],[name],[surname],[email],[pass],[created_at],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message });
            return;
        }
        results.status(201).json({id:results.insertId , email });
    });

});

const PORT = 3000;
api.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto 3000');
});