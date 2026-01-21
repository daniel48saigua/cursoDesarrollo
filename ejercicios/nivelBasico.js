function cubo(a){
    const result=Math.pow(a,3)
    return result;
}

//console.log(cubo(4))

function rectangulo(b,c){
    const result1=b*c
    return result1;
}

//console.log(rectangulo(3,4))

function numeroRandom(){
    result2=Math.floor(Math.random()*11)
    return result2;
}

//console.log(numeroRandom());


/*function parEimpar(n){
    residuo=n%2
    if (residuo==0)
        console.log('PAR')
    else
        console.log('IMPAR')

}

parEimpar(0)*/



function imprimirAlreves(cadena){
    for(i=cadena.length-1;i>=0;i--)
        console.log(cadena[i])
        

}

imprimirAlreves('daniel')