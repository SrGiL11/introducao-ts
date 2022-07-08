let cpf: any;

cpf = '01620445000';

cpf = true;

cpf = 10;

function apresentarCPF(cpf: string) {
    console.log(cpf)
}

apresentarCPF(cpf); 
/**
    Usar any tira poder do typescript e pode criar incoerências no seu projeto
    O any é comumente usado quando um objeto desconhecido é manipulado, ou quando uma refatoração de JS para TS é aplicada rapidamente sem tipar os objetos utilizados
    É uma má prática que reduz a velocidade dos times no longo prazo e foge do propósito do typescript
    Com o uso do ESLint é possível configurar seu projeto para não permitir o uso explícito de any
 */