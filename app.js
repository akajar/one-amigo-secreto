// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert("Por favor, inserte un nombre.")
    }
    else {
        amigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
        actualizarAmigos();
    }
}

function actualizarAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(const amigo of amigos){
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}