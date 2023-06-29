class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }

    ladrar() {
        console.log("¡Woof! " + this.nombre);
    }
}


let miPerro = new Perro("Firulais");

miPerro.ladrar();
