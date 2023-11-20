import Global from "@/Global";
import axios from "axios";

export default class ServiceToken{
   
   postLogin(usuario){
    return new Promise(function(resolve){
        var request = "/api/Manage/Login"
        var url = Global.urlexamen+request
        var token = ""
        axios.post(url,usuario).then(response=>{
            token = response.data.response
            resolve(token)
        })
    })
   }

   getPerfil(token){
 
    return new Promise(function(resolve){
        var request = "api/Manage/PerfilUsuario"
        var url = Global.urlexamen+request
        var perfil ={}
        axios.get(url, {
            headers: {
              Authorization: "Bearer " + token
            }
          }).then(response => {
            perfil = response.data;
            resolve(perfil);
          });
        });
      }
    }