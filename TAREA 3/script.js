const clientes = [];

document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Tomar los datos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // Validaciones básicas
    if (nombre === "" || email === "" || telefono === "") {
        mostrarMensaje("Completa todos los campos.", "red");
        return;
    }
    if (!email.includes("@")) {
        mostrarMensaje("Correo inválido.", "red");
        return;
    }

    // Registrar cliente
    clientes.push({ nombre, email, telefono });
    mostrarMensaje("¡Cliente registrado!", "green");
    actualizarTabla();
    document.getElementById("clienteForm").reset();
});

// Mostrar mensaje
function mostrarMensaje(mensaje, color) {
    const div = document.getElementById("resultado");
    div.textContent = mensaje;
    div.style.color = color;
}

// Actualizar tabla
function actualizarTabla() {
    const tbody = document.querySelector("#tablaClientes tbody");
    tbody.innerHTML = "";
    clientes.forEach(cliente => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
        `;
        tbody.appendChild(fila);
    });
}
