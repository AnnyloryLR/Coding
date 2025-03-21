function maxLucro(precos) {
    let max = 0;
    for(let i=0; i < precos.length; i++){
        for(let j=i+1; j < precos.length; j++){ 
            if( precos[j] - precos[i] > max){
                max = precos[j] - precos [i];
                
            }  
            
        } 
        
    }
    
    return max
}

console.log(maxLucro([7, 1, 5, 3, 6, 4]))