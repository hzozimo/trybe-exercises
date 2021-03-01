
function descontoSalario (salarioBruto){
    let salarioBase;
    let salario;
    //INSS
    if (salarioBruto > 5189.82)
        salarioBase = salarioBruto - 570.88;

    if ((salarioBruto <= 5189.82) && ( salarioBruto >= 2594.93))
    salarioBase = salarioBruto - ((11/100) *salarioBruto);

    if (((salarioBruto <= 2594.92) && ( salarioBruto >= 1556.95)))
    salarioBase = salarioBruto - ((9/100) *salarioBruto);

    if ( salarioBruto <= 1556.94)
    salarioBase = salarioBruto - ((8/100) *salarioBruto);

    //IR

    if (salarioBase <= 1903.98)
        salario = salarioBase;
    if ((salarioBase >=1903.99) && (salarioBase <= 2826.65))
        salario = salarioBase - ((7.5/100)*salarioBase - 142.80)
    if ((salarioBase >=2826.66) && (salarioBase <= 3751.05))
    salario = salarioBase - ((15/100)*salarioBase - 354.80)
    if ((salarioBase >=3751.06) && (salarioBase <= 4664.68))
    salario = salarioBase - ((22.5/100)*salarioBase - 636.13)
    if (salarioBase >4664.68)
    salario = salarioBase - ((27.5/100)*salarioBase - 869.36)

console.log(salario)
}

descontoSalario(3000)