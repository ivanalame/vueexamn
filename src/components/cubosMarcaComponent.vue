<template>
  <div>
    <h1>Cubos marca</h1>
<div v-for="cub in cubos" :key="cub" class="card">
  <img :src="cub.imagen" alt="Descripción de la imagen">
  <h1>Nombre: {{cub.nombre}}</h1>
  <h2>Marca: {{cub.marca}} </h2>
  <button> <router-link class="dropdown-item" :to="'/detalle/' + cub.idCubo">Detalle</router-link> </button>
</div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos'
const service = new ServiceCubos
export default {
    mounted(){
        var marca = this.$route.params.marca
        service.getCubosByMarca(marca).then(result=>{
            this.cubos=result
        })
    },
    data(){
        return{
            cubos:[]
        }
    },
    watch:{
        '$route.params.marca'(nextval,oldval){
            if(nextval!=oldval){
                 service.getCubosByMarca(this.$route.params.marca).then(result=>{
            this.cubos=result
        })
        }
        }
        
    }
}
</script>

<style>

</style>