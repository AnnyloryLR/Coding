function numGarrafasBebidas(numGarrafas, numTroca) {
    let numBebidas = numGarrafas;

    while(numGarrafas >= numTroca){
        numGarrafas = Math.floor(numGarrafas / numTroca);
        numBebidas+= numGarrafas;
    }

    return numBebidas
}