function maxNumberPattern(m, pattern) {
        let max = 0;
        for(let i=0; i <= pattern.length - m; i++){
                let nowSum =0;
                for(let j =i; j < i + m; j++){
                     nowSum += pattern[j];  
                        
                }
                if(nowSum > max){
                        max = nowSum;
                }
        }
        return max;
}