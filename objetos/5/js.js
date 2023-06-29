let objeto = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };

for ( clave in objeto) {
    if (objeto[clave] == "habilitado") {
        console.log("habilitado:", clave,objeto[clave]);
    }
}