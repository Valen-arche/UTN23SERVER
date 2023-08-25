var express = require('express');
var router = express.Router();

// Ruta para mostrar el formulario de inicio de sesión
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
    title: 'Iniciar sesión'
  });
});

// Ruta para procesar el formulario de inicio de sesión
router.post('/login', function(req, res, next) {
  // Aquí puedes agregar la lógica para verificar las credenciales de inicio de sesión
  // y autenticar al usuario. Por ejemplo:
  const { username, password } = req.body;
  if (username === 'usuario' && password === 'contraseña') {
    // El usuario se autenticó correctamente
    // Redirige a una página de inicio o dashboard
    res.redirect('/dashboard');
  } else {
    // Las credenciales son incorrectas
    // Vuelve a renderizar el formulario de inicio de sesión con un mensaje de error
    res.render('admin/login', {
      layout: 'admin/layout',
      title: 'Iniciar sesión',
      errorMessage: 'Credenciales incorrectas'
    });
  }
});

module.exports = router;
