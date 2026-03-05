// Seleccionamos los elementos del DOM [cite: 64, 75]
const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("agregar");
const listaTareas = document.getElementById("lista");
const contador = document.getElementById("contador");

let totalTareas = 0;

// Función para actualizar el contador [cite: 131]
const actualizarContador = () => {
    contador.textContent = totalTareas;
};

// Función para agregar tarea [cite: 142]
const agregarTarea = () => {
    const texto = inputTarea.value.trim();

    // Validación de tarea vacía [cite: 144]
    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    totalTareas++;
    
    // Crear el elemento de la lista usando plantillas literales [cite: 143]
    const nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `
        ${texto}
        <button class="delete">Eliminar</button>
    `;

    // Evento para eliminar esta tarea específica [cite: 129]
    nuevaTarea.querySelector(".delete").addEventListener("click", () => {
        nuevaTarea.remove();
        totalTareas--;
        actualizarContador();
    });

    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = ""; // Limpiar input
    actualizarContador();
};

// Evento de clic en el botón [cite: 77, 87]
btnAgregar.addEventListener("click", agregarTarea);

// Permitir agregar con la tecla Enter
inputTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") agregarTarea();
});