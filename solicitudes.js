const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta para almacenar un nuevo producto
app.post('/producto', (req, res) => {
  // Lógica para almacenar el nuevo producto
  res.send('Producto almacenado');
});

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  // Lógica para obtener todos los productos y su inventario
  res.send('Lista de productos');
});

// Ruta para actualizar un producto existente
app.put('/producto/:id', (req, res) => {
  const productId = req.params.id;
  // Lógica para actualizar el producto con el ID especificado
  res.send(`Producto ${productId} actualizado`);
});

// Ruta para eliminar un producto existente
app.delete('/producto/:id', (req, res) => {
  const productId = req.params.id;
  // Lógica para eliminar el producto con el ID especificado
  res.send(`Producto ${productId} eliminado`);
});

// Ruta para almacenar una nueva venta
app.post('/venta', (req, res) => {
  // Lógica para almacenar una nueva venta
  res.send('Venta almacenada');
});

// Ruta para obtener todas las ventas
app.get('/ventas', (req, res) => {
  // Lógica para obtener todas las ventas almacenadas
  res.send('Lista de ventas');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
