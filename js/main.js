function calcularTotal(subtotal) {
    const iva = subtotal * 0.13;
    const total = subtotal + iva;
    return total;
}
function mostrarCarrito() {
    alert('¡Bienvenido a Nuestros Servicios en FPS Lux Detailer!');
    let subtotal = 0;
    let resumen = '';
    while (true) {
        let seleccion;
        while (true) {
            let opciones = 'Por favor, selecciona un servicio:\n';
            opciones += '1. Lavado de carro - $40\n';
            opciones += '2. Pulido de carro - $150\n';
            opciones += '3. Cerámico de carro - $800\n';
            opciones += '100. Salir\n';
            seleccion = parseInt(prompt(opciones));
            if (seleccion === 100) {
                break;
            } else if (seleccion >= 1 && seleccion <= 3) {
                break;
            } else {
                alert('Opción inválida. Ingresa un número válido (1-3) o 100 para salir.');
            }
        }
        if (seleccion === 100) {
            break;
        }
        let precioServicio = 0;
        if (seleccion === 1) {
            precioServicio = 40;
        } else if (seleccion === 2) {
            precioServicio = 150;
        } else if (seleccion === 3) {
            precioServicio = 800;
        }
        subtotal += precioServicio;
        resumen += 'Servicio elegido: ';
        if (seleccion === 1) {
            resumen += `Lavado de carro - $${precioServicio}\n`;
        } else if (seleccion === 2) {
            resumen += `Pulido de carro - $${precioServicio}\n`;
        } else if (seleccion === 3) {
            resumen += `Cerámico de carro - $${precioServicio}\n`;
        }
        alert('Has agregado el servicio al carrito.');
        let agregarOtro;
        while (true) {
            agregarOtro = prompt('¿Deseas agregar otro servicio? (Si/No):').toLowerCase();
            if (agregarOtro === 'si' || agregarOtro === 'no') {
                break;
            } else {
                alert('Carácter inválido. Ingresa "Si" o "No".');
            }
        }
        if (agregarOtro === 'no') {
            break;
        }
    }
    alert('Resumen de tu Pedido:');
    alert(resumen);
    const total = calcularTotal(subtotal);
    alert(`Precio Total (incluyendo IVA 13%): $${total}\n\n¡Gracias por elegir nuestros servicios en FPS Lux Detailer!`);
}
mostrarCarrito();