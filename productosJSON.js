const fs = require('fs');

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10,
    imagen: "imagen1.png"
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 20,
    imagen: "imagen2.png"
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 30,
    imagen: "imagen3.png"
  }
];

const jsonProductos = JSON.stringify(productos);

fs.writeFile('productos.json', jsonProductos, (err) => {
  if (err) throw err;
  console.log('El archivo productos.json ha sido creado exitosamente!');
});


/* aplicando el modulo file system */

fs.readFile('productos.json', 'utf8', (err, data) => {
  if (err) throw err;
  const productos = JSON.parse(data);
  console.log(productos);
});
