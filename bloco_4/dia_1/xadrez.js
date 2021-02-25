let peca = "Rain"

let pecaMinusculo = peca.toLowerCase()

switch (pecaMinusculo) {
    case "cavalo":
        console.log("A peça se move em L")
        break;
    case ("peão"):
        console.log("A peça se move 1 espaço para frente e ataca 1 espaço na diagonal")
        break;
    case ("peao"):
    console.log("A peça se move 1 espaço para frente e ataca 1 espaço na diagonal")
    break;
    case "bispo":
        console.log("A peça se move na diagonal quantos espaços quiser")
        break;
    case "torre":
        console.log("A peça se move na vertical e na horizontal quantos espaços quiser")
        break;
    case "rainha":
        console.log("A peça se move quantos espaços quiser na vertical, horizontal e diagonal")
        break;
    case "rei":
        console.log("A peça se move 1 espaço na vertical, horizontal e diagonal")
        break;
    default:
        console.log("Essa peça não existe")
}