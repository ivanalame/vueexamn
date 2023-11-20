import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos{
    getcubos(){
        return new Promise(function(resolve){
            var request = "api/cubos/marcas"
            var url = Global.urlexamen+request
            var cubos = []
            axios.get(url).then(response=>{
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getAllCubos(){
        return new Promise(function(resolve){
            var request = "api/cubos/"
            var url = Global.urlexamen+request
            var cubos = []
            axios.get(url).then(response=>{
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getCubosByMarca(marca){
        return new Promise(function(resolve){
            var request = "/api/Cubos/CubosMarca/"+marca
            var url = Global.urlexamen+request
            var cubos = []
            axios.get(url).then(response=>{
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getCuboById(id){
        return new Promise(function(resolve){
            var request = "/api/Cubos/"+id
            var url = Global.urlexamen+request
            var cubo = {}
            axios.get(url).then(response=>{
                cubo = response.data
                resolve(cubo)
            })
        })
    }
   

    getComentariosCubo(id){
        return new Promise(function(resolve){
            var request = "/api/ComentariosCubo/GetComentariosCubo/"+id
            var url = Global.urlexamen+request
            var comentarios = []
            axios.get(url).then(response=>{
                comentarios = response.data
                resolve(comentarios)
            })
        })
    }
}