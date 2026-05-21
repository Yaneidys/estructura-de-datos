import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductListView from '../views/ProductListView.vue';
import ProductCreateView from '../views/ProductCreateView.vue';
import ProductEditView from '../views/ProductEditView.vue';

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/products', name: 'ProductList', component: ProductListView },
  { path: '/products/new', name: 'ProductCreate', component: ProductCreateView },
  { path: '/products/edit/:id', name: 'ProductEdit', component: ProductEditView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})