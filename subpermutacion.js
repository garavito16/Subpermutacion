
function permutaciones(restoPalabras,acumulado) {
    if(acumulado.length != 0) console.log(acumulado); 

    for(let i=0;i<restoPalabras.length;i++) {
        let caracter = restoPalabras.charAt(i);
        permutaciones(restoPalabras.slice(0,i)+restoPalabras.slice(i+1),acumulado+caracter)
    }
}

permutaciones("abc","");