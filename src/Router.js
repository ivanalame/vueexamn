import {createRouter, createWebHistory} from "vue-router"
import homeComponet from './components/HomeComponent.vue'
import CubosMarcaComponent from './components/cubosMarcaComponent.vue'
import DetalleComponente from './components/detalleComponent.vue'
import LoginComponente from './components/loginComponent.vue'
import PerfilComponent from './components/perfilComponent.vue'
const myRoutes=[
    {path:"/" ,component:homeComponet},
    {path:"/marca/:marca" ,component:CubosMarcaComponent},
    {path:"/detalle/:id" ,component:DetalleComponente},
    {path:"/login" ,component:LoginComponente},
    {path:"/perfil/:token" ,component:PerfilComponent},  

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router