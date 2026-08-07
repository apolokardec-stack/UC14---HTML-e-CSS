// 1. variáveis
const nomeCliente = "Maria";
const valorCompra = 650.00;
const clienteVip = false;

let percentualDesconto = 0;

// 2. desconto
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

// 3. Cálculos
const valorDesconto = (valorCompra * percentualDesconto) / 100;
const valorFinal = valorCompra - valorDesconto;

// 4. Exibição dos resultados principais
console.log(`Nome: ${nomeCliente}`);
console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto: ${percentualDesconto}%`);
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// 5. Frete grátis
if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}