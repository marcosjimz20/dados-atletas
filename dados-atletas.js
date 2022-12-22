// Definição da classe Atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        
    }

calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infatil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";      
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        } 
}

calculaIMC() {
    let valorIMC = 0;
    valorIMC = this.peso / (this.altura * this.altura);
    return valorIMC;
}

calculaMediaValida() {
    let soma = 0;
    let notasComputadas = this.notas;
    notasComputadas = notasComputadas.sort().slice(1, 4);
    notasComputadas.forEach(function(nota){
        soma = soma + nota;
    });
    let media = soma / notasComputadas.length;
    return media;
}

obtemNomeAtleta() {
    return "Nome: " + this.nome;
}

obtemIdadeAtleta() {
    return "Idade: " + this.idade;
}

obtemPesoAtleta() {
    return "Peso: " + this.peso;

}

obtemAlturaAtleta() {
    return "Altura: " + this.altura;
}

obtemNotasAtleta() {
    return "Notas: " + this.notas;
}

obtemCategoria() {
    return "Categoria: " + atleta.calculaCategoria()
}

obtemIMC() {
    return "IMC: " + atleta.calculaIMC();
}

obtemMediaValida() {
    return "Média válida: " + atleta.calculaMediaValida();
}
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

// Uso da classe Atleta    
atleta.calculaCategoria();
atleta.calculaIMC();
atleta.calculaMediaValida();
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida()); 
//FIM