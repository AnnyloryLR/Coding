function maiorSequenciaComum(muro1, muro2) {
    let maiorSequencia = [];
    for (let i = 0; i < muro1.length; i++) {
        valorAtual = muro1[i]
        for (let j= 0; j < muro2.length; j++) {
            if(valorAtual == muro2[j]){
                // if(maiorSequencia.includes(valorAtual)){
                //     continue
                // }
                maiorSequencia.push(muro2[j])
                    
            }
        }
     
    }
     
  return(maiorSequencia.length)    
}

        
console.log(maiorSequenciaComum([ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1 ]))

//[1, 2, 3, 2, 1],[3, 2, 1, 4, 7]
//[ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1 ]