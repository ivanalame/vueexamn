<template>
  <h1>Perfil de usuario</h1>

<div  class="card">
 
  <h1>User: {{usuario.nombre}}</h1>
  <h2>Email: {{usuario.email}} </h2>
  <!-- <button> <router-link class="dropdown-item" :to="'/detalle/' + cub.idCubo">Mostar Compras</router-link> </button> -->
</div>
</template>

<script>
import ServiceToken from '@/services/serviceToken'
const service = new ServiceToken
export default {
    data(){
        return{
          usuario:  {
                idUsuario: 0,
                nombre: "string",
                email: "string",
                pass: "string"
            }
        }
    },
   mounted(){
    service.getPerfil(this.$route.params.token).then(result=>{
        this.usuario = result
    })
   }
}
</script>

<style>

</style>