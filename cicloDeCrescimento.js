function alturaArvore(quantidadeCiclos) {
	let altura = 1;
	let estacao = "verao";

	for(let i=1; i <= quantidadeCiclos; i++){
		if(estacao == "verao"){
			altura *= 2;
			estacao = "inverno";
		}else{
			altura++;
			estacao = "verao"
		}
	}

	return altura
}	