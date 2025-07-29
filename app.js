//inicialización de variables
let amigos = [];
let amigo = "";

//al hacer click en botón añade el nombre a la lista
function agregarAmigo() {
  amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(amigo);
    limpiaInput();
    mostrarAmigos();
  }
  return;
}

//limpia el input de texto luego de añadir el nombre a la lista
function limpiaInput() {
  let input = document.getElementById("amigo");
  input.value = "";
  return;
}

//recorre la lista de amigos y se muestran en pantalla
function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li> ${amigos[i]} </li>`;
  }
  return;
}

//vacía la lista de los nombres luego del sorteo, para que solo se muestre el nombre sorteado
function vaciarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    return;
}


//al hacer click sortea un amigo de manera aleatoria entre todos los de la lista
function sortearAmigo() {
    if (amigos.length == 0){
        alert('No hay ningún amigo en la lista, ingrese nombres para luego sortear.');
    }else{
        let numAmigoSeleccionado = Math.floor(Math.random()*amigos.length);
        let nombreSorteado  = amigos[numAmigoSeleccionado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
        vaciarLista();
    }
    return;
}
