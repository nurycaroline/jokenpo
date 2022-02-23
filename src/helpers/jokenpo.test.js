import jokenpo from "./jokenpo";

describe("Jokenpo Game", () => {
  it("Without your choice, shoud be empty", () => {
    const { winner } = jokenpo("", "scissor");
    expect(winner).toEqual("");
  });
  it("Without house choice, shoud be empty", () => {
    const { winner } = jokenpo("rock", "");
    expect(winner).toEqual("");
  });

  it("should be paper vs paper = tied", () => {
    const { winner } = jokenpo("paper", "scissor");
    expect(winner).toEqual("playTwo");
  });
  it("should be paper vs scissor = playTwo", () => {
    const { winner } = jokenpo("paper", "scissor");
    expect(winner).toEqual("playTwo");
  });
  it("should be paper vs rock = playOne", () => {
    const { winner } = jokenpo("paper", "rock");
    expect(winner).toEqual("playOne");
  });

  it("should be scissor vs scissor = tied", () => {
    const { winner } = jokenpo("scissor", "scissor");
    expect(winner).toEqual("tied");
  });
  it("should be scissor vs paper = playOne", () => {
    const { winner } = jokenpo("scissor", "paper");
    expect(winner).toEqual("playOne");
  });
  it("should be scissor vs rock = playTwo", () => {
    const { winner } = jokenpo("scissor", "rock");
    expect(winner).toEqual("playTwo");
  });

  it("should be rock vs rock = tied", () => {
    const { winner } = jokenpo("rock", "rock");
    expect(winner).toEqual("tied");
  });
  it("should be rock vs scissor = playOne", () => {
    const { winner } = jokenpo("rock", "scissor");
    expect(winner).toEqual("playOne");
  });
  it("should be rock vs paper = playTwo", () => {
    const { winner } = jokenpo("rock", "paper");
    expect(winner).toEqual("playTwo");
  });

  it("should be lizard vs lizard = tied", () => {
    const { winner } = jokenpo("lizard", "lizard");
    expect(winner).toEqual("tied");
  });
  it("should be lizard vs spock = playOne", () => {
    const { winner } = jokenpo("lizard", "spock");
    expect(winner).toEqual("playOne");
  });
  it("should be lizard vs paper = playOne", () => {
    const { winner } = jokenpo("lizard", "paper");
    expect(winner).toEqual("playOne");
  });

  it("should be spock vs spock = tied", () => {
    const { winner } = jokenpo("spock", "spock");
    expect(winner).toEqual("tied");
  });
  it("should be spock vs scissor = playOne", () => {
    const { winner } = jokenpo("spock", "scissor");
    expect(winner).toEqual("playOne");
  });
  it("should be spock vs rock = playOne", () => {
    const { winner } = jokenpo("spock", "rock");
    expect(winner).toEqual("playOne");
  });
});
