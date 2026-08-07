// Dados do aluno
const nomeAluno = "Everthon";
const nota1 = 6.5;
const nota2 = 8.0;

// Cálculo da média
const media = (nota1 + nota2) / 2;
let situacao = "";

// Verificação da situação
if (media < 4.0) {
  situacao = "REPROVADO";
} else if (media < 7.0) {
  situacao = "RECUPERAÇÃO";
} else {
  situacao = "APROVADO";
}

// Exibição do resultado
console.log(`Aluno: ${nomeAluno}`);
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Situação: ${situacao}`);