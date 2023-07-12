function mostrarClaves(){
    let div = document.getElementById("claves")
    if(div.style.opacity === "0"){
        //div.style.display = "block"
        div.style.opacity = "1"
    }else {
        //div.style.display =  "none"
        div.style.opacity = "0"        
    }

    let p = document.getElementById("p").value
    let q = document.getElementById("q").value
    let z = (p-1)*(q-1)
    let e = coprimo(z)
    let n = p*q
    let d = inversoModular(e,z)
    
    document.getElementById("clavePublicaE").value = e
    document.getElementById("clavePublicaN").value = n
    document.getElementById("clavePrivadaD").value = d
    document.getElementById("clavePrivadaN").value = n

}