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
//------------------------GET-------------------------------------
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
//http://localhost:3000/user/pepe/argadrgd
api.post('/user', (request, results) => {
    const { email, pass } = request.body;

    db.query('CALL get_user(?, ?)', [email, pass], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        if (resultados.length > 0 && resultados[0].length > 0) {
            results.json(resultados[0]);
        } else {
            results.status(404).json({ message: 'Usuario no encontrado' });
            return; 
        }
    });
});
//---------------------------POST----------------------------------------
api.post('/register', (request, results) => {
    const { nick, name, surname, email, pass } = request.body;
  
    db.query('CALL set_register(?, ?, ?, ?, ?)', [nick, name, surname, email, pass], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({id:results.insertId , name});
    });
});



api.post('/menu', (request,results)=>{
    const {name,descripciones,imagenes} = request.body; 
    db.query('CALL set_menu ( ?,?,?)',[name,descripciones,imagenes],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message });
            return;
        }
        results.status(201).json({id:results.insertId , name});
    });

});

const PORT = 3000;
api.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto 3000');
});