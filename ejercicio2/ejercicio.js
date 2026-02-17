
function dibujarLetra(letra, altura, ancho) {

    let resultado = "";

    for (let v = 0; v < altura; v++) {
        for (let h = 0; h < ancho; h++) {

            switch (letra.toUpperCase()) {

                case "D":
                    if (
                        h === 0 || 
                       v === 0 || 
                          v === altura - 1 ||
                     (h === ancho - 1 && v !== 0 && v !== altura - 1)
                    ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;

                case "A": 
                if (
                    h===0||
                    h=== ancho -1 ||
                    v === 0||
                    v === Math.floor (altura /2)
               ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;




                case "N":
                    if (
                        h === 0 || 
                        h === ancho - 1 || 
                        h === v
                    ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;

                case "I":
                    if (
                        v === 0 || 
                        v === altura - 1 || 
                        h === Math.floor(ancho / 2)
                    ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;

                case "E":
                    if (
                        h === 0 || 
                        v === 0 || 
                        v === Math.floor(altura / 2) || 
                        v === altura - 1
                    ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;

                case "L":
                    if (
                        h === 0 || 
                        v === altura - 1
                    ) {
                        resultado += "*";
                    } else {
                        resultado += " ";
                    }
                    break;

                default:
                    resultado += " ";
            }

        }
        resultado += "\n";
    }

    return resultado;
}



let letra = prompt("Digite la letra (D, A, N, I, E, L):");
let altura = parseInt(prompt("Digite la altura:"));
let ancho = parseInt(prompt("Digite el ancho:"));

console.log(dibujarLetra(letra, altura, ancho));
