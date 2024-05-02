let boton1=document.getElementById('bt1');
let boton2=document.getElementById('bt2');
let boton3=document.getElementById('bt3');
let contenedor=document.getElementById('contenedor');

let cajas=document.getElementsByClassName('cuadro');
let cajasArray=Array.prototype.slice.call(cajas);

boton1.addEventListener('click', () => {
    cajasArray.forEach(element => {
        if (element.style.background!='red') {
            element.style.background = 'red';
        }
        else{
            element.style.background = 'blue';
        }
    });
});

boton2.addEventListener('click', () => {
    cajasArray.forEach(element => {
        if (element.style.borderRadius == '0%') {
            element.style.borderRadius = '25%';
        }
        else{
            element.style.borderRadius = '0%';
        }
    });
});

boton3.addEventListener('click', () => {
    let div = document.createElement("div");
    div.className='cuadro';
    div.style.borderRadius=cajasArray[0].style.borderRadius;
    div.style.background=cajasArray[0].style.background;
    contenedor.appendChild(div);
    cajas=document.getElementsByClassName('cuadro');
    cajasArray=Array.prototype.slice.call(cajas);
});

