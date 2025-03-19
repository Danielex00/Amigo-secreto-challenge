//array para alamacenar los nombres de amigos
let amigos=[];

//funcion para agregar un amigo
function agregarAmigo(){
    const imputAmigo = document.getElementById('amigo');
    const nombreAmigo = imputAmigo.value.trim();

    // validar que el campo no este vacio
    if(nombre === ""){
        alert("Por favor, inserte un nombre");
        return; //detener la ejecucion de la funcion

    }  

    // validar que el nombre no esta repetido
    if(amigos.incluidos(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}` ya esta en la lista);
        return;

    }

    // agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // limpiar el campo de engtrada
    imputAmigo.value= "";

    // actualizar la lista en html
    actualizarLista();

}

// funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    // limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //borra cualquier contenido previo dentro del contenedor

    // recorre el array con un ciclo for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos(i);
        listaAmigos.appendChild(li);

    }


}

// funcoin para selecionar un amigo aleatorio
function sortearAmigo(){
    //validar que haya amigos disponibles
    if(amigos.length === 0){
        alert("no hay amigos disponibles para sortear, Agrega al menos uno");
        return;

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `amigo sorteado: <strong>${amigoSorteado}</strong>`;
    }
}