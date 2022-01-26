// Randomizando o dado

function rollTheDice() {
  // Definindo um intervalor de 1 a 6 - que são os índices do array!
  return Math.floor(Math.random()*6)+1; // retorna o índice
}

// Se a página for recarregada
var text;
if(performance.navigation.type == performance.navigation.TYPE_RELOAD){  // Se a página for recarregada!

  // Agora, acessando o atributo src de img

    var player1 = rollTheDice(), player2 = rollTheDice();
    // Define o dado player 1
      document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png");
    // Define o dado player 2
      document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png");

  // Verifica o vencedor
  if(player1 > player2)
    text = "<i class='fas fa-flag' style='color: red;'></i> Player 1 wins!";
  else if (player2 > player1)
    text = "<i class='fas fa-flag' style='color: red;'></i> Player 2 wins!";
  else
    text = "<i class='fas fa-flag' style='color: white;'></i> Draw!";

  document.querySelector("h1").innerHTML = text;

}
