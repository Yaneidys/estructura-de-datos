<template>
    <div class="container mt-4">
        <h3>Gestión de Productos</h3>
        <div class="mb-3">
            <input v-model="nuevo.nombre" class="form-control mb-2" placeholder="Nombre" />
            <input v-model="nuevo.precio" class="form-control mb-2" placeholder="Precio" type="number" />
            <button class="btn btn-success" @click="agregar">Agregar</button>
        </div>

        <table class="table table-striped">
            <thead>
                <tr><th>Nombre</th><th>Precio</th><th>Acciones</th></tr>
            </thead>
            <tbody>
                <tr v-for="(p. 1) In productos" key="1">
                    <td>{{p.nombre }}</td>
                    <td>{{ p.precio }}</td>
                    <td><button @click="eliminar(1)" class="btn btn-danger btn-sa">Eliminar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {productos: [], nuevo: {nombre: '', precio: ''}}
    },
    created() {
        const data localstorage.getItem("productos")
        this.productos data? 350N.parse(data)
        
    methods: {
    agregar() {
    if (this.nuevo, nombre && this.nuevo.precio) (
    this.productos.push((...this nuevo))
    localStorage.setItem('productos', JSON.stringify(this.productos))
    this.nuevo nombre: precio:
    ),
    eliminar (Index) {
    this.productos.splice(Index, 1)
    localStorage.setItem("productos, 350N.stringify(this.productos))
    }
</script>