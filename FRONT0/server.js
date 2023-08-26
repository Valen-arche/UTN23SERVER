const express = require('express');

const app = express();
app.use(express.static('public'));



const PORT = 4000; // Puerto en el que el servidor escuchará

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

