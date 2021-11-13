function crearUsuario(){

let nombre = prompt("ingrese el nombre");
let apellido = prompt("ingrese el apellido");
let usuario = nombre + apellido;
let contraseña = usuario;
if(nombre!="" && apellido!=""){
    alert ("Su usuario es:" + " " + usuario + "\n Su contrasena es:" + " " + contraseña + "\n PODRA MODIFICARLA EN SETTINGS");
}else{
    alert("Su nombre y apellido no pueden estar vacios"); crearUsuario()
}}
crearUsuario()
;