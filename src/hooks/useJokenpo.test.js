import { renderHook } from "@testing-library/react-hooks";
import useJokenpo, { OPTIONS_JOKENPO } from "./useJokenpo";

describe("useJokenpo", () => {
  it("should be paper vs paper = tied", () => {
    const { result } = renderHook(() => useJokenpo("paper", "scissor"));
    expect(result.current.winner).toEqual("playTwo");
  });
  it("should be paper vs scissor = playTwo", () => {
    const { result } = renderHook(() => useJokenpo("paper", "scissor"));
    expect(result.current.winner).toEqual("playTwo");
  });
  it("should be paper vs rock = playOne", () => {
    const { result } = renderHook(() => useJokenpo("paper", "rock"));
    expect(result.current.winner).toEqual("playOne");
  });

  it("should be scissor vs scissor = tied", () => {
    const { result } = renderHook(() => useJokenpo("scissor", "scissor"));
    expect(result.current.winner).toEqual("tied");
  });
  it("should be scissor vs paper = tied", () => {
    const { result } = renderHook(() => useJokenpo("scissor", "paper"));
    expect(result.current.winner).toEqual("playOne");
  });
  it("should be scissor vs rock = tied", () => {
    const { result } = renderHook(() => useJokenpo("scissor", "rock"));
    expect(result.current.winner).toEqual("playTwo");
  });

  it("should be rock vs rock = tied", () => {
    const { result } = renderHook(() => useJokenpo("rock", "rock"));
    expect(result.current.winner).toEqual("tied");
  });
  it("should be rock vs scissor = tied", () => {
    const { result } = renderHook(() => useJokenpo("rock", "scissor"));
    expect(result.current.winner).toEqual("playOne");
  });
  it("should be rock vs paper = tied", () => {
    const { result } = renderHook(() => useJokenpo("rock", "paper"));
    expect(result.current.winner).toEqual("playTwo");
  });
});
