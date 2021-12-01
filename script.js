// class Usuario{
//     constructor (nombre, apellido, usuario, contraseña){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.usuario = nombre+apellido;
//         this.contraseña = nombre+apellido;
//     }

// }
let floreria = document.getElementById("floreria").value;
let personas = document.getElementById("persona").value;
let mails = document.getElementById("mail").value;
let direcciones = document.getElementById("direccion").value;
let telefonos = document.getElementById("telefono").value;

function crearClientes(marcacion, floristeria, persona, mail, direccion, telefono) {
        this.marcacion = marcacion;
        this.floristeria = floristeria;
        this.persona = persona;
        this.mail = mail;
        this.direccion = direccion;
        this.telefono = telefono;
        let marcaciones = document.getElementById("marcacion").value;

let cliente1 = new crearClientes (marcaciones, floreria,personas, mails, direcciones, telefonos);
return cliente1;
}

console.log(cliente1)
class Cajas{
    constructor (tipo,tallos,bunches){
        this.tipo = tipo;
        this.tallos = tallos;
        const caja1 = new Clientes (QB, 100,bunches)
        const caja2 = new Clientes (HB, 200,bunches)

    }
}

// function crearUsuario(){
//     const usuario1 = new Usuario (prompt("ingrese el nombre"), prompt("ingrese el apellido"));

//     if(usuario1.nombre!="" && usuario1.apellido!="") {
//         alert ("Su usuario es:" + " " + usuario1.usuario + "\n Su contrasena es:" + " " + usuario1.contraseña + "\n PODRA MODIFICARLA EN SETTINGS");
//         return usuario1;
//     } else {
//         alert("Su nombre y apellido no pueden estar vacios \n Ingrese su nombre y apellido nuevamente");
//         crearUsuario();
//     }
// }

// const usuario = crearUsuario();
// const usuarioLogIn = document.getElementById ("logInUsuario")

//     let impresionUsuario = document.createElement("p");
//     impresionUsuario.classList.add("impresionUsuarios");
//     impresionUsuario.innerHTML = "HOLA " + usuario.usuario
//     usuarioLogIn.appendChild(impresionUsuario);

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
function enviarPrepedido() {

let buncheUno = document.getElementById("pedidoBunches1").value;
let buncheDos = document.getElementById("pedidoBunches2").value;
let buncheTres = document.getElementById("pedidoBunches3").value;
let buncheCuatro = document.getElementById("pedidoBunches4").value;
let caja = document.getElementById("caja").value;
document.getElementById("pedidoParaEnviar1").innerHTML = buncheUno;
document.getElementById("pedidoParaEnviar2").innerHTML = buncheDos;
document.getElementById("pedidoParaEnviar3").innerHTML = buncheTres;
document.getElementById("pedidoParaEnviar4").innerHTML = buncheCuatro;
document.getElementById("tipoCaja").innerHTML = caja
}
enviarPrepedido();
// function tipoDeCaja(){
    //     if (document.getElementById("caja").value === "HB"){
    //         let buncheCinco = document.createElement("input");
    //         let buncheSeis = document.createElement("input");
    //         let buncheSiete = document.createElement("input");
    //         let buncheOcho = document.createElement("input");
    //         let padreDeBunches = document.getElementById("padreBunches")
    //         document.padreDeBunches.appendchild(buncheCinco);
    //         document.padreDeBunches.appendchild(buncheSeis);
    //         document.padreDeBunches.appendchild(buncheSiete);
    //         document.padreDeBunches.appendchild(buncheOcho);
    //     }
    // }

// objeto de tipo cliente marcacion, nombre, nombre persona, mail, direccion, telefono, pedido
// array de objeto de flores nombre, precio, tamaño,
// objeto tipo de caja nombre, bunches, cantidad
//poner un id al boton enviar y generar un evento