let usuarios = [];
$.get("http://127.0.0.1:5500/usuarios.json", (res) => {
    usuarios = res;
});
function confirmar(valor1 , valor2){
    for(let i = 0; i<2; i++){
    if (usuarios[i].usuario === valor1 && usuarios[i].password === valor2){
         return document.location.replace('/');
    }else{
          alert("la contraseña o el usuario es incorrecto")
    }
}
};

//events

document.getElementById('logIn').addEventListener('click', (e) => {
    e.preventDefault();
    confirmar(document.getElementById("usuario").value, document.getElementById("password").value)
  })