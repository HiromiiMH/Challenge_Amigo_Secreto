let listaDeAmigos = []; // arreglo para almacenar amigos

function agregarAmigo() {

    let inputAmigo = document.getElementById("amigo").value; //obtener el valor del input

    if(inputAmigo.trim()=== ""){
      alert('No se ha ingresado ningún amigo. Intente de nuevo');
    }
    else{
        let amigoCampo = document.createElement('li'); //crear un <li> para el <ul>
        amigoCampo.textContent = inputAmigo; // Asignar el valor ingresado al <li>
        console.log(inputAmigo);
    
        // Agregar el nuevo <li> a la lista <ul>
        listaAmigos.appendChild(amigoCampo);
        // Agregar el amigo al arreglo
        listaDeAmigos.push(inputAmigo);
        
        // Limpiar entrada
        document.getElementById("amigo").value = "";
    }

   
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    else{
        //número aleatorio por longitud de lista
        let sortear = Math.floor(Math.random() * listaDeAmigos.length);
        // se guarda el amigo sorteado de la lista
        let amigoSorteado = listaDeAmigos[sortear];
    
        //crear un nuevo <li> para mostrar el amigo sorteado
        let sorteadoCampo = document.createElement('li');
        sorteadoCampo.textContent = amigoSorteado;
    
        //agregar el nuevo <li> al <ul> existente
        let listaSorteados = document.getElementById("resultado");
        listaSorteados.appendChild(sorteadoCampo);
        listaAmigos.remove(); //desaparecer elemento 
        console.log(amigoSorteado);
    }

}
    
