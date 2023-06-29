class CuentaBancaria {
    constructor(titular) {
        this.saldo = 0;
        this.titular = titular;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }
}


let miCuenta = new CuentaBancaria("santiago");
console.log("tienes:",miCuenta.saldo,"en tu cuenta");

miCuenta.depositar(100);
console.log("tienes:",miCuenta.saldo,"en tu cuenta");

miCuenta.depositar(50);
console.log("tienes:",miCuenta.saldo,"en tu cuenta");
