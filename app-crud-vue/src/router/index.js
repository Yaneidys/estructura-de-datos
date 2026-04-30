import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashBoardView from '@/views/DashboardView.vue'
import ProductoView from '@/views/ProductoView.vue'

const routers = [
    { path: '/', component: LoginView },
    { path: '/dasboard', component: DashBoardView },
    { path: '/productos', component: ProductoView }
]
export default createRouter({
    history: createWebHistory(),
    routes
})