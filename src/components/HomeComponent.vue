<template>
  <div>
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
        service.getAllCubos().then(result=>{
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
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
img{
    width: 150px;
    height: 150px;
}

</style>