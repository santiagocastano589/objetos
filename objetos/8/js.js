let objetos = {
    162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
    4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
    786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
};


for (let claveExterna in objetos) {
    for (let claveInterna in objetos[claveExterna]) {
        let valor = objetos[claveExterna][claveInterna];
        console.log(claveInterna, valor);
    }

    console.log("---------");
}
