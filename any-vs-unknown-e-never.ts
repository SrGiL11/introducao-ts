let valor: unknown; // unknown é um tipo que pode receber qualquer valor
valor = 5;
valor = 'Max';
let nome: string;

// nome = valor; Isso não vai funcionar. O tipo unknown não pode ser arbitrariamente atribuído
if (typeof valor === 'string') {
    nome = valor; // Isso funciona. Esse tipo só pode ser atribuido se uma validação for feita
}

let valorAny: any;
valorAny = true;
valorAny = 10
nome = valorAny; 

function geradorDeErro(mensagem: string, codigoDeErro: number): never { 
    throw {message: mensagem, errorCode: codigoDeErro }; 
}

geradorDeErro('Um erro ocorreu!', 500);