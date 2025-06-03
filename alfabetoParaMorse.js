function transformaMorse(frase) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    let fraseCodificada = "";

    for(let caractere of frase){
        if(alfabeto.includes(caractere)){
            let indice = alfabeto.indexOf(caractere);
            fraseCodificada+= morse[indice]+ " ";
        }
    }
    let fraseFinal = fraseCodificada.trim(" ")
    return fraseFinal;

}