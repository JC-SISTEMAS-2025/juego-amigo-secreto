// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let nombreDelAmigo = '';

// 1- función para agregar nombres de amigos ok //
function agregandoAmigo() {
    nombreDelAmigo = (document.getElementById('amigo').value).trim();
    
  
 // 2- Validar entrada ok  //
    if (nombreDelAmigo == '') {
        alert('Ingrese al menos un nombre valido');  
    } else {
        amigos.push(nombreDelAmigo);
     }
        limpiarInput();
        verListaDeAmigos();

    return
}
function limpiarInput() {

    document.querySelector('#amigo').value = ''
  
}
// 3- VISUALIZAR LA LISTA  ok ok //
function verListaDeAmigos() {
   
    let listaDeAmigosHtml = document.getElementById("listaAmigos");
        listaDeAmigosHtml.innerHTML = '';

        for (let i = 0; i<amigos.length ; i++) {
        
        let amigoIngresado = document.createElement('li');
        let texto = document.createTextNode(amigos[i]);
        amigoIngresado.appendChild(texto);
        
        listaDeAmigosHtml.appendChild(amigoIngresado);

        sortearAmigo()
    }

}

// 4- Funcion para sorteo aleatoreo pndte//
function sortearAmigo() {
    
    if (amigos.length == 0) {
        alert(' El campo esta vacio, no permite sortear');
    } else {
        if(amigos.length == 1) {
           alert('Ingresa los nombres de tus amigos para elegir a uno de ellos como amigo secreto')
        } else {
            
            let i = Math.floor(Math.random()*amigos.length);
            
            let amigoSecreto = amigos[i];
                        
            let resultadoHtml = document.getElementById('resultado');
            resultadoHtml.innerHTML = amigoSecreto;
        }
           
    }
     
}
