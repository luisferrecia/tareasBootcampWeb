var biblioteca = [
    {
        autor: 'Bill Gates',
        titulo: 'The Road Ahead',
        estadoLectura: true
    },
    {
        autor: 'Steve Jobs',
        titulo: 'Walter Isaacson',
        estadoLectura: true
    },
    {
        autor: 'Suzanne Collins',
        titulo: 'Mockingjay: The Final Book of The Hunger Games',
        estadoLectura: false
    }
];

function leerArray(conjunto){
    for (let index = 0; index < conjunto.length; index++) {
        console.log((index+1)+"° libro");
        console.log("Autor: "+conjunto[index].autor);
        console.log("Titulo: "+conjunto[index].titulo);
        if (conjunto[index].estadoLectura) {
            console.log("Estado de lectura: Leido");
        }else{
            console.log("Estado de lectura: No leido");
        }
        console.log("");
    }
}

leerArray(biblioteca);

