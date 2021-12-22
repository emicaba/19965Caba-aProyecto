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
localStorage.setItem("Usuarios", JSON.stringify(usuario));
const usuarioGuardado = JSON.parse(localStorage.getItem("usuarios"));

const usuarioLogIn = document.getElementById ("logInUsuario");

    let impresionUsuario = document.createElement("p");
    impresionUsuario.classList.add("impresionUsuarios");
    impresionUsuario.innerHTML = "HOLA " + usuario.usuario
    usuarioLogIn.appendChild(impresionUsuario);
urlrosas="http://127.0.0.1:5500/rosas.json"

$.get(urlrosas)

class Caja {
    constructor(tipo, variedad1, variedad2, variedad3, variedad4, variedad5, variedad6, variedad7, variedad8 ){
      this.tipo = tipo;
      this.variedad1 = variedad1;
      this.variedad2 = variedad2;
      this.variedad3 = variedad3;
      this.variedad4 = variedad4;
      this.variedad5 = variedad5;
      this.variedad6 = variedad6;
      this.variedad7 = variedad7;
      this.variedad8 = variedad8;
    }
  }
  const rosas = [
    ['Rosas Red', ["Explorer", "Freedom"]],
    ['Rosas Hot Pink', ["Pink Floyd", "Lola", "Hot Explorer", "Topaz", "Gotcha"]],
    ['Rosas Lavander', ["Cool Water", "Moody Blues"]],
    ['Rosas Pink', ["Esperance", "Frutetto", "Pink Mondial", "Hermosa", "Sweet Unique"]],
    ['Rosas White', ["Mondial", "Playa Blanca", "Vendela", "Polarstar", "Moonstone"]],
    ['Rosas Peach', ["Shimmer", "Tiffany"]],
    ['Rosas Orange', ["Free Spirit", "Nina", "Orange Crush"]],
    ['Rosas Yellow', ["Bikini", "Brighton", "Stardust"]],
    ['Rosas Bicolor', ["Sweetness"]],
    ['Rosas Teracota', ["Kahala"]],
  ]

  class Cliente{
    constructor(marcacion, floristeria, persona, mail, direccion, telefono) {
        this.marcacion = marcacion;
        this.floristeria = floristeria;
        this.persona = persona;
        this.mail = mail;
        this.direccion = direccion;
        this.telefono = telefono;

}
}
class Pedido {

    constructor() {
      this.caja = null;
      this.cliente = null;
    }

    agregarCaja(caja) {
        if(caja.cajaTipo === "HB"){
            this.caja = new Caja(caja.cajaTipo, caja.cajaVariedad1, caja.cajaVariedad2, caja.cajaVariedad3, caja.cajaVariedad4, caja.cajaVariedad5, caja.cajaVariedad6, caja.cajaVariedad7, caja.cajaVariedad8);      
        }else {this.caja = new Caja(caja.cajaTipo, caja.cajaVariedad1, caja.cajaVariedad2, caja.cajaVariedad3, caja.cajaVariedad4);

        }}

    agregarCliente(cliente) {
      this.cliente = new Cliente(cliente.marcacion, cliente.floristeria, cliente.persona, cliente.mail, cliente.direccion, cliente.telefono);
    }

    enviar() {
      console.log('Enviando formulario!');
      console.log({
        caja: this.caja,
        cliente: this.cliente,
      })
    }

  }
function crearSelectorDeVariedad(index) {
    const selector = document.createElement('select');
    selector.name = `cajaVariedad${index}`;

    // Crea los options dentro del selector
    for (let grupoVariedad of rosas) {
        const optGroup = document.createElement('optgroup');
        optGroup.label = grupoVariedad[0];

        for (let variedad of grupoVariedad[1]) {
            const option = document.createElement('option');
            option.value = variedad;
            option.innerText = variedad;
            optGroup.append(option);
        }

        selector.append(optGroup);
    }

    return selector;
}
function prepararSelectorDeVariedades(tipoSeleccionado, formPedido) {
    const contenedorSelectores = formPedido.querySelector('#form-detalle-pedido-variedades');

    // Crea los 8 select para elegir las variedades
    contenedorSelectores.innerHTML="";
    const cantidadSelectores = tipoSeleccionado === "HB" ? 8 : 4;
    for (let i = 0; i < cantidadSelectores; i++) {
        contenedorSelectores.append(crearSelectorDeVariedad(i+1));
    }
}

function manejarSubmitFormDetalleCaja(e, callback) {
    e.preventDefault();
    const detalleCaja = {};

    const formData = new FormData(e.target);

    for (let v of formData) {
        detalleCaja[v[0]] = v[1];
    }

    callback(detalleCaja);
}

function manejarSubmitFormDatosCliente(e, callback) {
    e.preventDefault();
    const datosCliente = {};

    const formData = new FormData(e.target);

    for (let v of formData) {
        datosCliente[v[0]] = v[1];
    }

    callback(datosCliente);
}

function mostrarDetalleCaja(detalleCaja) {
    const contenedorDetalleCaja = document.getElementById('detalle-caja');
    if(detalleCaja.tipo === "HB"){    contenedorDetalleCaja.innerHTML = `
    <h2>Tipo caja: ${detalleCaja.tipo}</h2>
    <h3>Variedad 1: ${detalleCaja.variedad1}</h3>
    <h3>Variedad 2: ${detalleCaja.variedad2}</h3>
    <h3>Variedad 3: ${detalleCaja.variedad3}</h3>
    <h3>Variedad 4: ${detalleCaja.variedad4}</h3>
    <h3>Variedad 5: ${detalleCaja.variedad5}</h3>
    <h3>Variedad 6: ${detalleCaja.variedad6}</h3>
    <h3>Variedad 7: ${detalleCaja.variedad7}</h3>
    <h3>Variedad 8: ${detalleCaja.variedad8}</h3>
`

    }else {
        contenedorDetalleCaja.innerHTML = `
        <h2>Tipo caja: ${detalleCaja.tipo}</h2>
        <h3>Variedad 1: ${detalleCaja.variedad1}</h3>
        <h3>Variedad 2: ${detalleCaja.variedad2}</h3>
        <h3>Variedad 3: ${detalleCaja.variedad3}</h3>
        <h3>Variedad 4: ${detalleCaja.variedad4}</h3>
    `
    }
}

function mostrarDatosCliente(datosCliente) {
    const contenedorDatosCliente = document.getElementById('datos-cliente');

    contenedorDatosCliente.innerHTML = `
        <h2>Marcacion: ${datosCliente.marcacion}</h2>
        <h3>Floristeria: ${datosCliente.floristeria}</h3>
        <h3>Persona: ${datosCliente.persona}</h3>
        <h3>Mail: ${datosCliente.mail}</h3>
        <h3>Dirección: ${datosCliente.direccion}</h3>
        <h3>Teléfono: ${datosCliente.telefono}</h3>
    `;
}

function main() {
    const informacionCompletaDelPedido = new Pedido();
    const formDetalleCaja = document.getElementById('form-detalle-pedido');
    const formDatosCliente = document.getElementById('form-datos-cliente');
    const botonConfirmarPedido = document.getElementById('boton-confirmar-pedido');
    const URLGET = "http://127.0.0.1:5500/pedidoFinal.json"
    // Eventos
    document.getElementById('caja').addEventListener('change', (e)=> {
    prepararSelectorDeVariedades(e.target.value, formDetalleCaja);
    })
    formDetalleCaja.addEventListener('submit', (e) => manejarSubmitFormDetalleCaja(e, (detalleCaja) => {
        informacionCompletaDelPedido.agregarCaja(detalleCaja);
        mostrarDetalleCaja(informacionCompletaDelPedido.caja);
    }))
    formDatosCliente.addEventListener('submit', (e) => manejarSubmitFormDatosCliente(e, (datosCliente) => {
        informacionCompletaDelPedido.agregarCliente(datosCliente);
        mostrarDatosCliente(informacionCompletaDelPedido.cliente);
    }))
    botonConfirmarPedido.addEventListener('click', () => {
        $.post(URLGET, informacionCompletaDelPedido ,(respuesta, estado) => {
            if(estado === "success"){
                $("body").prepend(`<div>
    Guardado:${respuesta}
    </div>`);}
    }); alert("caja cargada"); location.reload()

})};
main();
