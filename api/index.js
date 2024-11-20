const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const api = express();

require('dotenv').config();
api.use(express.json());

api.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

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
api.get('/', (request, results) => {
    results.send("<h1>API con Express</h1>");
});

api.get('/estado', (request, results) => {
    db.query("SELECT * FROM restaurante__estado", (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.json(resultados);
    });
    });

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

api.post('/user', (req, res) => {
    const { email, pass } = req.body;

    // Consulta a la base de datos para verificar las credenciales
    db.query('CALL get_user(?, ?)', [email, pass], (err, resultados) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: 'Error en la consulta de la base de datos' });
        }

        if (resultados.length > 0 && resultados[0].length > 0) {
            // Si las credenciales son correctas
            const user = resultados[0][0]; // Primer usuario encontrado

            if (user.email === 'admin@gmail.com' && user.pass === 'gatito69'){
                user.role = 'Administrador';  // Asignar rol Admin
            }else{
                user.role = 'Usuario';
            }

            return res.json({
                message: 'Login exitoso',
                user: {
                    id_user : user.id_user,
                    token: user.token,
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    pass : user.pass,
                    role: user.role
                }
            });
        } else {
            // Si las credenciales son incorrectas
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    });
});


//---------------------------POST----------------------------------------

api.post('/register', (request, results) => {
    const { nick, name, surname, email, pass } = request.body;

    db.query('CALL set_register(?, ?, ?, ?, ?)', [nick, name, surname, email, pass], (err, resultados) => {
        if (err) {
            console.error('Error al registrar:', err);
            results.status(500).json({ message: err.message });
            return;
        }

        results.status(201).json({ id: resultados.insertId, email });
    });
});



api.post('/menu', (request, results) => {
    const { categoria, name, descripcion, precio, imagen } = request.body;

    // Verificar si el nombre está presente
    if (!name || name.trim() === '') {
        return results.status(400).json({ message: 'El nombre del platillo es requerido' });
    }

    // Verificar que todos los demás campos sean válidos
    if (!categoria || !descripcion || !precio) {
        return results.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    db.query('CALL set_menu(?, ?, ?, ?, ?)', [categoria, name, descripcion, precio, imagen], (err, resultados) => {
        if (err) {
            return results.status(500).json({ message: err.message });
        }

        results.status(201).json({ id: resultados.insertId, name });
    });
});


// api.get('/menu')
api.get('/platillos', (req, res) => {
    db.query('SELECT * FROM restaurante__menu', (err, resultados) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).json({ message: 'Error al obtener los platos' });
            return;
        }

        if (resultados.length === 0) {
            res.status(404).json({ message: 'No se encontraron platos' });
            return;
        }

        res.json(resultados);
    });
});

api.post('/carrito', (req, res) => {
    const { p_menu, p_user, cantidad } = req.body;

    if (!p_menu || !p_user || !cantidad) {
        return res.status(400).json({ message: 'Faltan datos en la solicitud' });
    }

    // Verifica los parámetros que se pasan al procedimiento almacenado
    console.log('Parámetros que se pasarán a la consulta:', p_menu, p_user, cantidad); // Esto imprimirá los valores individuales

    // Llamada al procedimiento con 3 parámetros
    db.query('CALL set_carritos(?, ?, ?)', [p_menu, p_user, cantidad], (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);  // Imprimir el error de la consulta
            return res.status(500).json({ message: 'Error al agregar al carrito' });
        }
        res.status(200).json({ message: 'Producto agregado al carrito' });
    });
});


// Obtener todos los productos del carrito de un usuario (Backend)
api.get('/carrito', (req, res) => {
    const { userId } = req.query; // Obtener el userId desde los parámetros de la consulta

    if (!userId) {
        return res.status(400).json({ message: 'Falta el userId en los parámetros de la consulta' });
    }

    // Consulta SQL para obtener todos los productos del carrito de un usuario
    db.query(`CALL get_carrito(?)`, [userId], (err, resultados) => {
        
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ message: 'Error al obtener los productos del carrito' });
        }

        if (resultados.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos en el carrito' });
        }

        res.json(resultados);
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






// http://localhost:3000/agregar_platos
api.post('/agregar_platos', (request, results) => {
    const {tipo,name,descripciones,imagenes} = request.body;
  
    db.query('CALL set_agregar_platos(?,?,?,?)', [tipo,name,descripciones,imagenes], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({id:results.insertId , name});
    });
});

// http://localhost:3000/get_carrito
api.post('/get_carrito', (request, results) => {
    const {token_user} = request.body;
  
    db.query('CALL get_carrito(?)', [token_user], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({id:results.insertId , name});
    });
});


// http://localhost:3000/carrito
api.post('/carrito', (request, results) => {
    const {menu,user} = request.body;
  
    db.query('CALL set_carrito(?,?)', [menu,user], (err, resultados) => {
        if (err) {
            results.status(500).json({ message: err.message });
            return;
        }
        results.status(201).json({id:results.insertId , name});
    });
});




const PORT = 3000;
api.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3000');
});






