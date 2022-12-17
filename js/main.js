const persona1 = {
    id: 1,
    nombre: "Iván",
    edad: 34,
    email: "lizarazu.ivan@gmail.com",
    password: "coderhouse",
    pesos: 15334,
    bitcon: 0.25,
    ethereum: 1.33,
    usdc: 1200
}

const persona2 = {
    id: 2,
    nombre: "martina",
    edad: 18,
    email: "perez.martina@gmail.com",
    password: "martinahouse",
    pesos: 500,
    bitcon: 2.36,
    ethereum: 1.33,
    usdc: 1200
}

const persona3 = {
    id: 3,
    nombre: "Juan Carlos",
    edad: 54,
    email: "juanca@gmail.com",
    password: "juancalomas",
    pesos: 532131.25,
    bitcon: 0.75,
    ethereum: 1.33,
    usdc: 1200
}
const bitcon = {
    id: 1,
    compra: 5364605.71,
    venta: 5322837.44
}

const ethereum = {
    id:2,
    venta: 367195.49,
    compra: 370320.88,
}

const usdc = {
    id: 3,
    compra: 323.77,
    venta: 321.23
}


const arrayPersona = [persona1,persona2,persona3];
const arrayCripto = [bitcon,ethereum,usdc];


let user_prompt     = null;
let password_prompt = null;
let ingreso         = false;
let user            = null;

function login (){
    user_prompt     = prompt("Ingrese su email");
    user = arrayPersona.find((el) => {
        return el.email==user_prompt
        })    
        if (user!==undefined){
            password_prompt = prompt("Ingrese su contraseña");
            if (user.password==password_prompt){
                return true;
            }else{
                alert("credenciales incorrectas");
                return false;
            }
        }else{
            alert("Email no encontrado");
            return false;
        }
   
    
  
}

doLogin();

function doLogin(){    
    while (!ingreso) {
        if (login()){
            ingreso = true;
            alert("Bienvenido");
        }      
    }  
}


//doLogin();

if (ingreso){
    let opcion = prompt("Elegí una opción:  \n1-Saldo \n2-Convertir pesos a BTC \n3-Convertir BTC a pesos \n4-Depositar pesos \n5-Presioná X para finalizar");
    while(opcion!='X'){
        switch (opcion) {
            case "1":
                alert("Tu saldo en BTC es de: " + user.bitcon + " y tu saldo en pesos es: $" + user.pesos );
                break;
            case "2":
                let compra = prompt("Cuantos PESOS queres invertir?");
                if (compra>user.pesos){
                    alert("Saldo en PESOS insuficiente");
                }else{
                    user.bitcon = user.bitcon + (compra/bitcon.compra);
                    user.pesos = user.pesos - compra;
                    alert("Tus BTC ahora son de: " + user.bitcon);
                }      
                break;
            case "3":
                let venta = prompt("Cuantos BTC querés vender?");
                if (venta>user.bitcon){
                    alert("Saldo BTC insuficiente");
                }else{
                    user.pesos = venta * bitcon.venta;
                    user.bitcon = user.bitcon - venta;
                    alert("Tus PESOS ahora son de: " + user.pesos);
                }   
                break;
            case "4":
                let deposito = prompt("Cuantos PESOS querés depositar?");
                user.pesos = user.pesos + deposito;
                alert("Tus PESOS ahora son de: " + user.pesos);
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



