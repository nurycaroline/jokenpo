export const OPTIONS_JOKENPO = ["paper", "scissor", "rock"];

const paperWins = ["rock"];
const scissorWins = ["paper"];
const rockWins = ["scissor"];

export default function useJokenpo(playOnePicked, playTwoPicked) {
  let winner = OPTIONS_JOKENPO[0];

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
