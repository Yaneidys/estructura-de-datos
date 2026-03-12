async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
  }
  cargarComponente("header", "components/header/header.html");
// --- Paso 1 (Continuación): Cargar el Footer ---
cargarComponente("footer", "components/footer/footer.html");

// --- Paso 2: Lista dinámica de productos (Array) ---
// Usamos un array para evitar duplicar código y facilitar el mantenimiento [cite: 7, 36]
const productos = [
    { nombre: "Laptop Gamer Pro", precio: "1200", desc: "16GB RAM, SSD 512GB, excelente para tu rendimineto como desarrollador" },
    { nombre: "Mouse Optico", precio: "30", desc: "Inalámbrico con carga USB, muy útil y práctico para evitar los molestos cables" },
    { nombre: "Teclado Mecánico", precio: "85", desc: "Switch Blue, RGB" }
];

// --- Paso 3: Crear el Web Component <product-card> ---
// Los Web Components permiten crear elementos HTML personalizados con comportamiento propio [cite: 145]
class ProductCard extends HTMLElement {
    constructor() {
        super();
        // Encapsulamos el DOM interno usando Shadow DOM para que los estilos sean independientes [cite: 162, 181, 184]
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Obtenemos los atributos: nombre, precio y descripción [cite: 229, 230, 231, 232]
        const nombre = this.getAttribute("nombre");
        const precio = this.getAttribute("precio");
        const desc = this.getAttribute("descripcion");

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin: 10px;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                h3 { color: #2c3e50; margin: 0 0 10px 0; }
                .precio { color: #27ae60; font-weight: bold; }
            </style>
            <div class="card">
                <h3>${nombre}</h3>
                <p>${desc}</p>
                <p class="precio">$${precio}</p>
            </div>
        `;
    }
}
// Registramos el componente con un nombre que incluya guión [cite: 174, 177]
customElements.define("product-card", ProductCard);

// --- Paso 4: Integración y renderizado dinámico ---
const contenedor = document.getElementById("catalogo-container");

// Recorremos el array y creamos el componente para cada producto [cite: 130, 225]
productos.forEach(p => {
    const card = document.createElement("product-card");
    card.setAttribute("nombre", p.nombre);
    card.setAttribute("precio", p.precio);
    card.setAttribute("descripcion", p.desc);
    contenedor.appendChild(card);
});