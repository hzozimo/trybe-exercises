let a = 45;
let b = 45;
let c = 350;

if ((a <= 0) || (a >= 360)) {
    console.log("O primeiro ângulo é invalido")
}
else 
    if ((b <= 0) || (b >= 360)) {
        console.log("O segundo ângulo é invalido")
    }
    else 
        if ((c <= 0) || (c >= 360)) {
            console.log("O terceiro ângulo é invalido")
        } 
        else 
            console.log(a + b + c == 180)
