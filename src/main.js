debugger
var clave_Usuario = parseInt(prompt("Digite su clave"));
const clave = 1980;
let ahorro = 20000000;
cajero (clave_Usuario, clave)

 function cajero(clave_Usuario, clave) {
    

if(clave_Usuario !== clave){
    for (let I = 1; I <=3 && clave_Usuario !== clave; I++){
        alert("Clave errada, lleva " + I + "Intentos");
         clave_Usuario = parseInt(prompt("Digite nuevamente su clave"));
         
    }
    alert("Su clave ha sido bloqueada");
}else {
    alert(" Bienvend@ señor@ Héctor Enrique");
    alert("Qué desea hacer: 1. Consignar, 2.retirar")
    let respuestaTransaccion = parseInt(prompt("Digite el número de la transacción deseada"));
    switch (respuestaTransaccion){
        case 1:
            if (respuestaTransaccion === 1){
                let ingresoAhorro = parseInt(prompt("Digite la cantidad a consignar"));
                ahorro = ingresoAhorro + ahorro;
                let preguntaSaldo = prompt("Desea conocer su saldo s/n");
                if(preguntaSaldo ==='s'){
                    preguntaSaldo = ahorro;
                    alert("Su nuevo saldo es: " + preguntaSaldo);
                }
                
            }
            break;
            case 2:
            if (respuestaTransaccion === 2){
                let retiroAhorro = parseInt(prompt("Digite la cantidad a retirar"));
                if(retiroAhorro <= ahorro){
                    ahorro = ahorro - retiroAhorro;
                    let preguntaSaldo = prompt("Desea conocer su saldo s/n");
                 if(preguntaSaldo ==='s'){
                    preguntaSaldo = ahorro;
                    alert("Su nuevo saldo es: " + preguntaSaldo);
                }
            }else {
                alert("Fondos insuficientes");
            }
}
}

}


}