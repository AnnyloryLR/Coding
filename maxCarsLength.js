function larguraMaxCarro(larguras, entradasSaidas) {
    let maxLargura = []
    let entradaSaidaPorLargura = []

    for(let i = 0; i < entradasSaidas.length; i++) {
        //console.log(i)// correct
        //console.log(larguras[i])//correct 
        let largura = [];
        let carLength = entradasSaidas[i].length     
        
        for(let j=0; j < carLength; j++ ){    
            largura.push(larguras[j]);
            
        }
        larguras = larguras.slice(carLength)
        maxLargura.push(Math.min(...largura))
    } 
   

    
    
    return maxLargura
        
}


console.log(larguraMaxCarro([1,1,1,1,1,1,1,1,1,1], [[0,1,1,3], [1,2], [0,1],[1,3]]))



//[2, 3, 2, 1, 3, 4], [[0, 1, 2, 4], [1, 3]]
 