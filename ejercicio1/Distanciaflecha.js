let CalcularDistancia=(xfinal,xinicial,yfinal,yinicial)=>{
 
    let total=(Math.pow(xfinal-xinicial,2))+(Math.pow(yfinal-yinicial,2));

    return Math.sqrt(total,2);
}

console.log(CalcularDistancia(70,0,50,0));


