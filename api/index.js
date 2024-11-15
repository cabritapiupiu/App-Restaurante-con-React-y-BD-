const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Importa el paquete cors
const api = express();

require('dotenv').config();
api.use(express.json());

// Configuración de CORS
api.use(cors());  // Esto habilita CORS para todas las rutas

// Si solo quieres habilitar CORS para un dominio específico, usa lo siguiente:
/*
api.use(cors({
    origin: 'http://localhost:3001'  // Cambia esto por la URL de tu frontend en React
}));
*/

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((error) => {
    if (error) {
        console.error('Error al conectar:', error);
        return;
    }
    console.log('Conexión exitosa');
});

//------------------------GET-------------------------------------


api.get('/promociones', (req, res) => {
    db.query('CALL get_promociones()', (err, resultados) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }

        if (resultados[0].length === 0) {  // Si no hay resultados
            res.status(404).json({ message: 'No se encontraron promociones' });
            return;
        }

        res.json(resultados[0]);
    });
});


//http://localhost:3000/fotos
api.get('/fotos', (req, res) => {
    db.query('CALL get_fotos_platillos()', (err, resultados) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.json(resultados);
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

// http://localhost:3000/register
// {
//     "nick":"hola",
//     "name":"hola",
//     "surname":"hola",
//     "email":"luca397600@gmail.com",
//     "pass":"hola"
//   }
api.post('/register', (request, results) => {
    const { nick, name, surname, email, pass } = request.body;
  
    db.query('CALL set_register(?, ?, ?, ?, ?)', [nick, name, surname, email, pass], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({ id: results.insertId, name });
    });
});

api.post('/menu', (request, results) => {
    const { name, descripciones, imagenes } = request.body;
    db.query('CALL set_menu ( ?,?,?)', [name, descripciones, imagenes], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({ id: results.insertId, name });
    });
});


api.get('/detalles/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM restaurante__menu WHERE id_menu = ?', [id], (err, resultados) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ message: 'Error al obtener los detalles' });
            return;
        }

        if (resultados.length === 0) {
            res.status(404).json({ message: 'No se encontraron detalles para este plato' });
            return;
        }

        res.json(resultados);
    });
});



const PORT = 3000;
api.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

