function chessBoard(size) {
    let white = "⬜"
    let black = "⬛"
    
    let last =""; 
    let previous =black;
    if (size == 0) {
        return 0}
    else if(size %2 !== 0){
        for (let i = 0; i < size; i++) {
        acc = "";
            for(let j=0; j < size; j++){
                
                if(previous == white){
                    acc+= black;
                }else if(previous == black){
                    acc+= white;
                } 
                previous = acc[acc.length - 1]
            }
       
           last =  acc[acc.length - 1];
           console.log(acc)
        }
    } else{
        for (let i = 0; i < size; i++) {
        acc = "";
            for(let j=0; j < size; j++){
                
                if(previous == white){
                    acc+= black;
                }else if(previous == black){
                    acc+= white;
                } 
                previous = acc[acc.length - 1]
            }
       
           last =  acc[acc.length - 1];
           
        }
        for (let index = 0; index < size/2; index++) {
            console.log(acc)
            console.log(acc.split("").reverse().join(""))
            
        }
    }
}

console.log(chessBoard(8))