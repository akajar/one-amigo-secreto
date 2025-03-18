// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert("Por favor, inserte un nombre.")
    }
    else {
        if (amigos.includes(nombreAmigo)) {
            alert("El nombre ya fue ingresado");
            return
        }
        amigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
        actualizarAmigos();
        document.querySelector('#limpiar').disabled = false;
    }
}

function actualizarAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(const amigo of amigos){
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("Por favor, inserte un nombre.");
    }
    else {
        const indice = Math.floor(Math.random()*amigos.length)
        const listaAmigosHTML = document.querySelectorAll('#listaAmigos li');
        console.log(listaAmigosHTML);
        listaAmigosHTML[indice].id='elegido';
        const mensaje = `El amigo secreto sorteado es : ${amigos[indice]}`;
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${mensaje}</li>`
    }
}

function limpiarLista(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('limpiar').disabled = true;
}
