function triangulo (ladoA, ladoB, ladoC){
    if ((ladoA <= 0) || (ladoA >= 360)) {
        console.log("O primeiro ângulo é invalido")
    }
    else 
        if ((ladoB <= 0) || (ladoB >= 360)) {
            console.log("O segundo ângulo é invalido")
        }
        else 
            if ((ladoC <= 0) || (ladoC >= 360)) {
                console.log("O terceiro ângulo é invalido")
            } 
            else 
                console.log(ladoA + ladoB + ladoC == 180)
    }            

triangulo(90, 45, 45);