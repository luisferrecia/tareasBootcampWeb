
    let participantes = new Array();

function llenarArray(){
    participantes = ["Elena","Carlos","Javier","Laura","Miguel","Patricia"];
}

function leerArray(){
    
console.log('Clasificacion actual:');
    for (let index = 0; index < participantes.length; index++) {
        console.log(index+1,'. ',participantes[index]);
    }
    
}

function modificarArray(index, elemento){
    participantes[index] = elemento;
}

function intercambiarElementos(index1, index2){
    let aux = participantes[index1];
    participantes[index1] = participantes[index2];
    participantes[index2] = aux;
}

function eliminarElemento(pos){
    participantes.splice(pos, 1);
}

function agregarElemento(pos, element){
    participantes.splice(pos, 0, element);
}


//Paso 1
llenarArray();

//Paso 2
leerArray(); 

//Paso 3, 4
intercambiarElementos(2,3);

//Paso 5
eliminarElemento(5,1);

//Paso 6
agregarElemento(1, "Sofia");
agregarElemento(1, "Raul");

//Paso 7
agregarElemento(0, "Carmen");

//Paso 8

console.log();
console.log("[ELEMENTOS ACTUALIZADOS]");
console.log();
leerArray(); 