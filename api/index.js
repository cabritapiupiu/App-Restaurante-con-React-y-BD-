
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
});
api.get('/',(request, results)=>{
    results.send("<h1>Api con express</h1>");
}); 

api.get('/estado', (request,results)=>{
    db.query("SELECT * FROM restaurante__estado",(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message });
            return;
        }
        results.json(resultados);
    });
 
});


/**
 *En este punto del fin de tipo GET traemos todos los datos del plato que el usuario seleccionó.
 *Para poder mostrar todos estos datos se necesita un token.
 * token para usar :   5KUTI9cyi0OmElfBfYfRkTtO2Op4LmutQlJ5GyXLOqvqlXIaS80Se3zGR9oIpx3i
 * seria de esta forma
 * http://localhost:3000/plato/5KUTI9cyi0OmElfBfYfRkTtO2Op4LmutQlJ5GyXLOqvqlXIaS80Se3zGR9oIpx3i
 **/

api.get('/plato/:token', (request,results)=>{
    const  {token} = request.params;
    db.query('SELECT * FROM restaurante__menu WHERE token = ?',[token],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message });
            return;
        }
        results.json(resultados);
    });
 
});


api.post('/pedido/:token', (request,results)=>{
    const  {descripciones} = request.body;
    const  {menu} = request.body;
    const  {user} = request.body;

const token = 'tu_token_aqui';

console.log('Token decodificado:', decoded);
    
    const {estado} = 1;

    db.query('INSERT INTO restaurante__pedido (descripciones,FK_estado,FK_menu,FK_user,token,creat__add) VALUES (?,?,?,?,?,?)',[descripciones,estado],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message });
            return;
        }
        results.json(resultados);
    });
 
});

const PORT = 3000;
api.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto 3000');
});