let custo= 100;
let venda = 150;
let custoTotal = (1.2 * custo);
let lucro = venda - custoTotal;
let lucroTotal = 1000 * lucro;

if ((custo <=0) || (venda <= 0))
    console.log("valores informados inválidos")
else
    console.log(lucroTotal)
