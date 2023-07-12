function botonEncriptar(){
    let mensaje = document.getElementById("mensaje").value
    let m = LetraANumero(mensaje)

    let p = document.getElementById("p").value
    let q = document.getElementById("q").value
    let z = (p-1)*(q-1)
    let e = coprimo(z)
    let n = p*q
    let d = inversoModular(e,z)
    

    mensajeCifradoLista = encriptadoSimple(m,e,n)
    mensajeCifrado = ''
    for(var i = 0; i < mensajeCifradoLista.length; i++){
        mensajeCifrado += mensajeCifradoLista[i]
    }

    document.getElementById("resultado").value = mensajeCifrado + ' \n\n'+mensajeCifradoLista
    console.log(NumeroALetra(desencriptado(mensajeCifradoLista,d,n)))
    /*console.log(mensajeCifradoLista)
    console.log(mensajeCifrado)*/
}

function botonDesencriptar(){
    let mensaje = document.getElementById("mensaje").value
    let p = document.getElementById("p").value
    let q = document.getElementById("q").value
    let z = (p-1)*(q-1)
    let e = coprimo(z)
    let n = p*q
    let d = inversoModular(e,z)
    
    mensaje = mensaje.split(',')
    document.getElementById("resultado").value = NumeroALetra(desencriptado(mensaje,d,n))
}

function coprimo(z){
    opciones = primosHasta(z)
    for(var i = 0; i < opciones.length; i++){
        if(mcd(z,opciones[i]) == 1){
            return opciones[i]
            break
        }
    }
}

function mcd(a,b){
    var max = 0
    if(a > b){
        max = a
    }else{max = b}

    var mcd = 1
    for(var i = 1; i <= max; i++){
        if(a%i == 0 && b%i == 0){
            mcd = i
        }
    }
    return mcd
}

function primosHasta(n){
    var primos = []
    var contador = 0;
    for(var  i = 2; i <= n; i++){
        contador = 0
        for(var j = 2; j<= i; j++){
            if(i%j == 0){
                contador++
            }
        }
        if(contador == 1){
            primos.push(i)
        }
    }
    return primos
}

function encriptadoSimple(numeros,e,n){
    var mensajeCifrado = []
    for(var i = 0; i < numeros.length; i++){
        mensajeCifrado.push(algorMod(parseInt(numeros[i]),e,n))
    }
    return mensajeCifrado
}

function desencriptado(numeros,d,n){
    var mensajeDescifrado = []
    for(var i = 0; i < numeros.length; i++){
        mensajeDescifrado.push(algorMod(parseInt(numeros[i]),d,n))
    }
    return mensajeDescifrado
}

function inversoModular(n,m){
    for(var i = 0; i <= m-1; i++){
        if((n*i)%m == 1){
            return i
            break
        }
    }
}

function algorMod(b,n,m){
    var l = binario(n)
    var power = b%m
    var x = 1
    //console.log(power)
    for(var i = 0; i < l.length; i++){
        if(l[i] == 1){
            x = (x*power)%m
        }
        power = (power*power)%m
    }
    return x
}

function binario(n){
    var i = 0
    var l = []
    while(n != 0){
        l.push(n%2)
        n = Math.floor(n/2)
        i++
    }
    return l
}

function LetraANumero(mensaje){
    let abc = ' abcdefghijklmnopqrstuvxyz'
    //console.log(abc.length)
    let numero = []
    mensaje = mensaje.toLowerCase()
    for(var i = 0; i < mensaje.length; i++){
        for(var j = 0; j < abc.length; j++){
            if(mensaje[i] == abc[j]){
                numero.push(abc.indexOf(mensaje[i]))
            }
        }
    }
    return numero
}

function NumeroALetra(numero){
    let abc = ' abcdefghijklmnopqrstuvxyz'
    let mensaje = ''
    for(var i = 0; i < numero.length; i++){
        for(var j = 0; j < abc.length; j++){
            if(parseInt(numero[i]) == j){
                mensaje += abc[j]
            }
        }
    }
    return mensaje
}