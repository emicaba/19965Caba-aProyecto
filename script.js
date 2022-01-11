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


  let rosas = []
  $.get("http://127.0.0.1:5500/rosas.json", (res) => {
    rosas = res;
})

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
            optGroup.appendChild(option);
        }

        selector.appendChild(optGroup);
    }

    return selector;
}
function prepararSelectorDeVariedades(tipoSeleccionado, formPedido) {
    const contenedorSelectores = formPedido.querySelector('#form-detalle-pedido-variedades');

    // Crea los 8 select para elegir las variedades
    contenedorSelectores.innerHTML="";
    const cantidadSelectores = tipoSeleccionado === "HB" ? 8 : 4;
    for (let i = 0; i < cantidadSelectores; i++) {
        contenedorSelectores.appendChild(crearSelectorDeVariedad(i+1));
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
        if(informacionCompletaDelPedido.cliente.marcacion.trim().length > 0 &&
        informacionCompletaDelPedido.cliente.floristeria.trim().length > 0 &&
        informacionCompletaDelPedido.cliente.persona.trim().length > 0 &&
        informacionCompletaDelPedido.cliente.mail.trim().length > 0 &&
        informacionCompletaDelPedido.cliente.direccion.trim().length > 0 &&
        informacionCompletaDelPedido.cliente.telefono.trim().length > 0
        ){
            if(document.getElementById('caja').value != "indefinido"){
                $.post("https://run.mocky.io/v3/cb4dc9a4-3212-4c6b-a1c1-50817bc0c6fd", informacionCompletaDelPedido ,(respuesta, estado) => {
                if(estado === "success"){
                    alert(`Guardado:${respuesta.message}`);
                    setTimeout(() => {
                        location.reload()
                    }, 200);
                }
                });
            } else {
                alert("Campos de Caja incorrecto");
            }
        } else {
            alert("Campos de cliente incompletos");
        }
    });
};
main();
