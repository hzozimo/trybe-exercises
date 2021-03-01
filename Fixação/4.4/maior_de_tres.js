function maiorDeTres (a, b, c) {
if ((a > b) && (a > c))
    console.log("O primeiro número é maior")
else
    if ((b > a) && (b > c))
        console.log("O segundo número é maior")
    else
        if ((c > a) && (c > b))
            console.log("O terceiro número é maior")
}
maiorDeTres (1, 2, 3)