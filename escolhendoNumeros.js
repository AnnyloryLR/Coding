function escolhendoNumeros(a){ 
    let tamanho = 0;
    
    if(a.length > 0){
        if(a.length %2 === 0){
            for (let i = 0; i <= a.length; i++) { 
                let array = []
                let diferenca = 0;
                for (let j =i; j < a.length; j++) {
                    diferenca -= a[i] - a[j]
                    if(Math.abs(diferenca) <= 1){
                        array.push(a[j])                   
                    
                    }
                  
                }
        
                if(array.length > tamanho){
                    tamanho = array.length
                }
            }    
        } else{
            for (let i = 0; i <= a.length; i++) { 
            let array = []
            let diferenca = 0;
            for (let j =i; j < a.length; j++) {
                diferenca = a[i] - a[j]
                 console.log(a[i], "-" ,a[j],"=",a[i] - a[j])
                if(Math.abs(diferenca) <= 1){
                    array.push(a[j])                   
                
                }
              
            }
                
            if(array.length > tamanho){
                tamanho = array.length
            }
        }    
        }
        
    }
    return tamanho;
}

console.log(escolhendoNumeros([4,6,5,3,3,1]))

//[4,6,5,3,3,1]
//[1,1,2,2,4,4,5,5,5,]
