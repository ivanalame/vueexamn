<template>
  <div>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="dropdown-item" to="/">cubos</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Marcas
          </a>
          <ul class="dropdown-menu">
            <li v-for="mar in cubos" :key="mar">
               <router-link class="dropdown-item" :to="'/marca/' + mar">{{mar}}</router-link>
            </li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Seguridad
          </a>
          <ul class="dropdown-menu">
            <li :key="mar">
               <router-link class="dropdown-item" to="/login">Log in</router-link>
                 <!-- <router-link class="dropdown-item" to="'/marca/'">Registrase</router-link>
                   <router-link class="dropdown-item" to="'/marca/' ">Logout</router-link> -->
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import ServiceCubos from './../services/serviceCubos'
const service = new ServiceCubos
export default {
    mounted(){
        service.getcubos().then(result=>{
            this.cubos= result
            console.log(this.cubos)
        })
    },
    data(){
        return{
            cubos:[]
        }
    }
}
</script>

<style>

</style>