let user            = "ivan";
let password        = "coderhouse";
let user_prompt     = null;
let password_prompt = null;
let ingreso         = false;
let saldo_BTC       = 15.37;
let saldo_pesos     = 547;
let BTC_compra      = 5351530.60;
let BTC_venta       = 5326558.72;

function login (){
    user_prompt     = prompt("Ingrese un usuario");
    password_prompt = prompt("Ingrese contraseña");
    if ((user==user_prompt) && (password==password_prompt)){
        return true;
    }else{
        return false;
    }
}


function doLogin(){
    while (!ingreso) {
        if (login()){
            ingreso = true;
            alert("Bienvenido");
        }else{      
            alert("Credenciales incorrectas");
            login();
        }
    }
}

doLogin();

if (ingreso){
    let opcion = prompt("Elegí una opción:  \n1-Saldo \n2-Convertir pesos a BTC \n3-Convertir BTC a pesos \n4-Depositar pesos \n5-Presioná X para finalizar");
    while(opcion!='X'){
        switch (opcion) {
            case "1":
                alert("Tu saldo en BTC es de: " + saldo_BTC + " y tu saldo en pesos es: $" + saldo_pesos );
                break;
            case "2":
                let compra = prompt("Cuantos PESOS queres invertir?");
                if (compra>saldo_pesos){
                    alert("Saldo en PESOS insuficiente");
                }else{
                    saldo_BTC = saldo_BTC + (compra/BTC_compra);
                    alert("Tus BTC ahora son de: " + saldo_BTC);
                }      
                break;
            case "3":
                let venta = prompt("Cuantos BTC querés vender?");
                if (venta>saldo_BTC){
                    alert("Saldo BTC insuficiente");
                }else{
                    saldo_pesos = venta * BTC_venta;
                    alert("Tus PESOS ahora son de: " + saldo_pesos);
                }   
                break;
            case "4":
                let deposito = prompt("Cuantos PESOS querés depositar?");
                saldo_pesos = saldo_pesos + deposito;
                break;
            case "X":
                alert("Hasta la próxima!");
                break;     
            default:
                alert("Comando no válido")
                break;
        }     
        opcion = prompt("Elegí una opción:  \n1-Saldo \n2-Convertir pesos a BTC \n3-Convertir BTC a pesos \n4-Depositar pesos \n Presioná X para finalizar");       
    }
}


