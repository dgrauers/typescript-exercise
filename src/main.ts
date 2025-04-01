let carrito = [];

function agregarProducto(producto, cantidad) {
  carrito.push({ producto, cantidad });
}

function calcularTotal(impuesto) {
  let total = 0;
  for (let item of carrito) {
    total += item.producto.precio * item.cantidad;
  }
  return total + impuesto;
}

function mostrarCarrito() {
  for (let item of carrito) {
    console.log(`${item.producto.nombre} x${item.cantidad}`);
  }
  console.log(`Total: ${calcularTotal(10)}`);
}

let producto1 = { nombre: "Camiseta", precio: 20 };
let producto2 = { nombre: "Pantalón", precio: 35 };

agregarProducto(producto1, 2);
agregarProducto(producto2, 1);

mostrarCarrito();
