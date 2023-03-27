export function mega(quantidade = 6, numeros = []) {
    let qtde = +quantidade;
  
    if (qtde < 6 || qtde > 60) {
      throw new Error("Quantidade inválida!");
    }
    
    if (numeros.length === qtde) {
      return numeros.sort((n1, n2) => n1 - n2);
    }
  
    let numeroAleatorio;
    do {
      numeroAleatorio = parseInt(Math.random() * 60) + 1;
    } while (numeros.includes(numeroAleatorio));
  
    return mega(qtde, [...numeros, numeroAleatorio]);
  }
  