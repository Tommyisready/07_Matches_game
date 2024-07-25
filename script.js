let totalMatches = 50;
let currentPlayer = 1;

function updateGameStatus(message) {
  document.getElementById("gameStatus").textContent = message;
}

function showPlayerInput() {
  document.getElementById("playerInput").style.display = "block";
}

function hidePlayerInput() {
  document.getElementById("playerInput").style.display = "none";
}

function startGame() {
  totalMatches = 50;
  currentPlayer = 1;
  updateGameStatus(`Player ${currentPlayer}'s turn. There are ${totalMatches} matches.`);
  showPlayerInput();
}

function removeMatches(total, toRemove) {
  if (toRemove < 1 || toRemove > 6) {
    throw new Error("The number of matches to remove must be between 1 and 6.");
  }
  if (toRemove > total) {
    throw new Error("The number of matches to remove cannot exceed the total number of matches.");
  }
  return total - toRemove;
}

function makeMove() {
  let matchesToRemove = parseInt(document.getElementById("matchesToRemove").value, 10);
  if (isNaN(matchesToRemove)) {
    alert("Please enter a valid number.");
    return;
  }

  try {
    totalMatches = removeMatches(totalMatches, matchesToRemove);
    if (totalMatches === 0) {
      updateGameStatus(`Congratulations, Player ${currentPlayer}, you won by removing the last match!`);
      hidePlayerInput();
    } else {
      updateGameStatus(`Player ${currentPlayer} removed ${matchesToRemove} match(es). ${totalMatches} match(es) remain.`);
      currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch player
    }
  } catch (e) {
    alert(e.message);
  }
}
