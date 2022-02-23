export const OPTIONS_JOKENPO = ["paper", "scissor", "rock"];

const scissorWins = ["paper", "lizard"];
const paperWins = ["rock", "spock"];
const rockWins = ["scissor", "lizard"];
const lizardWins = ["spock", "paper"];
const spockWins = ["scissor", "rock"];

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
  } else if (playOnePicked === "lizard" && lizardWins.includes(playTwoPicked)) {
    winner = "playOne";
  } else if (playOnePicked === "spock" && spockWins.includes(playTwoPicked)) {
    winner = "playOne";
  } else {
    winner = "playTwo";
  }

  return { winner };
}

export default useJokenpo;
