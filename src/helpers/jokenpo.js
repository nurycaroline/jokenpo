export const OPTIONS_JOKENPO = ["paper", "scissor", "rock"];

const paperWins = ["rock"];
const scissorWins = ["paper"];
const rockWins = ["scissor"];

function useJokenpo(playOnePicked, playTwoPicked, callback) {
  let winner = "";

  if (!playOnePicked || !playTwoPicked) {
    return { winner: "" };
  }

  if (playOnePicked === playTwoPicked) {
    winner = "tied";
  } else if (playOnePicked === "paper" && paperWins.includes(playTwoPicked)) {
    winner = "playOne";
  } else if (
    playOnePicked === "scissor" &&
    scissorWins.includes(playTwoPicked)
  ) {
    winner = "playOne";
  } else if (playOnePicked === "rock" && rockWins.includes(playTwoPicked)) {
    winner = "playOne";
  } else {
    winner = "playTwo";
  }

  return { winner };
}

export default useJokenpo;
