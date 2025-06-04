function maximoJogos(dinheiro) { 
	let jogosComprados = 0;
	let preco = 100;

	while(dinheiro >= preco){
		jogosComprados++
		dinheiro-= preco
		preco-= 10

		if(preco <= 40){
			preco = 40;
		}
	}	

	return jogosComprados;
}