class cuentaBancaria {
    constructor(titular) {
        this.saldo = 0;
        this.titular = titular;
    }
    depositar(cantidad) {
        this.saldo += cantidad;
        console.log("se deposito:",cantidad,"a tu cuenta.", "su saldo es de:", this.saldo);
    }
    retirar(cantidad) {
        this.saldo = this.saldo - cantidad;
        console.log("se retiro:",cantidad,"de tu cuenta.", "su saldo es de:", this.saldo);
    }
}
let miCuenta = new cuentaBancaria("santiago");

miCuenta.depositar(100);
miCuenta.retirar(30);

