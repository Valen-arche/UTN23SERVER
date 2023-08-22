const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto a la dirección de tu servidor MySQL si es remoto
  user: 'Valen',
  password: '1234',
  database: 'usuario1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida.');
});

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

const PORT = 3002; // Puerto en el que el servidor escuchará

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

process.on('beforeExit', () => {
  connection.end();
});
