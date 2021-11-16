class Usuario{
    constructor (nombre, apellido, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = nombre+apellido;
        this.contraseña = nombre+apellido;
    }

}
function crearUsuario(){

    if(usuario1.nombre!="" && usuario1.apellido!=""){
        alert ("Su usuario es:" + " " + usuario1.usuario + "\n Su contrasena es:" + " " + usuario1.contraseña + "\n PODRA MODIFICARLA EN SETTINGS");
    }else{
        alert("Su nombre y apellido no pueden estar vacios \n PRESIONE F5")
    }}
const usuario1 = new Usuario (prompt("ingrese el nombre"), prompt("ingrese el apellido"));

crearUsuario();
