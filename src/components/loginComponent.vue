<template>
  <div>
    <form v-on:submit.prevent="postLogin()">
        <label>Mail</label>
        <input type="text" class="form-control" v-model="usuario.email">
        <label>Password</label>
        <input type="text" class="form-control" v-model="usuario.password">
        <button>Log in</button>

        <div v-if="token !== null">
      <button> <router-link class="dropdown-item" :to="'/perfil/' + token">Ver Perfil</router-link> </button>
       <!-- <button> <router-link class="dropdown-item" :to="'/detalle/' + cub.idCubo">Ver Compras</router-link> </button>
        <button> <router-link class="dropdown-item" :to="'/detalle/' + cub.idCubo">Nueva Compra</router-link> </button> -->
        </div>
    </form>
  </div>
</template>


<script>
import ServiceToken from '@/services/serviceToken'
const service = new ServiceToken
export default {
    data(){
        return{
            token: null,
            usuario:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        postLogin(){
            service.postLogin(this.usuario).then(result=>{
                this.token = result
                console.log(this.token)
            })
        }
    }
}
</script>

<style>
div{
    margin-top: 3px;
}
</style>