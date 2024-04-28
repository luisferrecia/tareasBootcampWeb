class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }

    get area(){
        return this.areaRect();
    }

    areaRect () {
        return this.alto*this.ancho;        
    }

    get perimetro(){
        return this.perimetroRect();
    }

    perimetroRect () {
        return (this.alto+this.ancho)*2;
    }

  }

  let rect = new Rectangulo();
  rect.alto=6;
  rect.ancho=2;
  
  
  console.log("Para un rectangulo con altitud: "+rect.alto+" y anchura: "+rect.ancho);
  console.log("El area es de: "+rect.area);
  console.log("El perimetro es de: "+rect.perimetro);
  