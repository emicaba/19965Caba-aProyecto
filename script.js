class Usuario{
    constructor (nombre, apellido, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = nombre+apellido;
        this.contraseña = nombre+apellido;
    }

}

function crearUsuario(){
    const usuario1 = new Usuario (prompt("ingrese el nombre"), prompt("ingrese el apellido"));

    if(usuario1.nombre!="" && usuario1.apellido!="") {
        alert ("Su usuario es:" + " " + usuario1.usuario + "\n Su contrasena es:" + " " + usuario1.contraseña + "\n PODRA MODIFICARLA EN SETTINGS");
        return usuario1;
    } else {
        alert("Su nombre y apellido no pueden estar vacios \n Ingrese su nombre y apellido nuevamente");
        crearUsuario();
    }
}

const usuario = crearUsuario();
const usuarioLogIn = document.getElementById ("logInUsuario")

    let impresionUsuario = document.createElement("p");
    impresionUsuario.classList.add("impresionUsuarios");
    impresionUsuario.innerHTML = "HOLA " + usuario.usuario
    usuarioLogIn.appendChild(impresionUsuario);

const rosasRed = ["Explorer", "Freedom"];
const rosasHotPink = ["Pink Floyd", "Lola", "Hot Explorer", "Topaz", "Gotcha"];
const rosasLavander = ["Cool Water", "Moody Blues"];
const rosasPink = ["Esperance", "Frutetto", "Pink Mondial", "Hermosa", "Sweet Unique"];
const rosasWhite = ["Mondial", "Playa Blanca", "Vendela", "Polarstar", "Moonstone"];
const rosasPeach = ["Shimmer", "Tiffany"];
const rosasOrange = ["Free Spirit", "Nina", "Orange Crush"];
const rosasYellow = ["Bikini", "Brighton", "Stardust"];
const rosasBicolor = ["Sweetness"];
const rosasTeracota = ["Kahala"];
const rosas = rosasRed.concat(rosasHotPink, rosasLavander, rosasPink, rosasWhite, rosasPeach, rosasOrange, rosasYellow, rosasBicolor, rosasTeracota);
if(rosas.length === rosasRed.length + rosasHotPink.length + rosasLavander.length + rosasPink.length + rosasWhite.length + rosasPeach.length + rosasOrange.length + rosasYellow.length + rosasBicolor.length + rosasTeracota.length){
console.log(rosas);
} else {
    console.log("Error de concatenacion");
}