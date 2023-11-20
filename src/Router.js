import {createRouter, createWebHistory} from "vue-router"
import homeComponet from './components/HomeComponent.vue'
import CubosMarcaComponent from './components/cubosMarcaComponent.vue'
import DetalleComponente from './components/detalleComponent.vue'
const myRoutes=[
    {path:"/" ,component:homeComponet},
    {path:"/marca/:marca" ,component:CubosMarcaComponent},
    {path:"/detalle/:id" ,component:DetalleComponente}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router