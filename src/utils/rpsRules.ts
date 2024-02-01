export const rpsRules = (botChoice: string, playerChoice: string) => {
  if (botChoice === playerChoice) {
    return "Draw";
  } else if (
    (botChoice === "scissors" && playerChoice === "rock") ||
    (botChoice === "paper" && playerChoice === "scissors") ||
    (botChoice === "rock" && playerChoice === "paper")
  ) {
    return `Win`;
  } else {
    return `Loss`;
  }
};
