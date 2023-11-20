<template>

<div  class="card">
  <img :src="cubo.imagen" alt="Descripción de la imagen">
  <h1>Nombre: {{cubo.nombre}}</h1>
  <h2>Marca: {{cubo.marca}} </h2>

 <h2>Comentarios: </h2>
   <div v-for="com of comentarios" :key="com">
        <h2>Usuario: {{com.idUsuario}}</h2>
        <h2>{{com.comentario}}</h2>
        <h2>{{com.fechaComentario}}</h2>
   </div>
  <button> <router-link class="dropdown-item" :to="'/marca/' + cubo.marca">Vovler a cubos de esta marca</router-link> </button>

    <button> <router-link class="dropdown-item" to="/">Vovler a ver todos los cubos</router-link> </button>
</div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos'
const service = new ServiceCubos
export default {
    mounted(){
          var id = this.$route.params.id
        service.getCuboById(id).then(result=>{
            this.cubo=result
        })
        
        service.getComentariosCubo(id).then(result=>{
            this.comentarios = result
        })
    },
    data(){
         return{
            cubo:{},
            comentarios:[]
        }
    }
}
</script>

<style>

</style>