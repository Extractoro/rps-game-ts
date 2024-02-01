import { FC, useEffect, useState } from "react";
import Button from "./shared/Button";
import { ButtonVariant } from "./types/types";
import BotChoice from "./components/BotChoice";
import { rpsRules } from "./utils/rpsRules";
import toast, { Toaster } from "react-hot-toast";

const App: FC = () => {
  const [wins, setWins] = useState<number>(0);
  const [loses, setLoses] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [choseVariant, setChoseVariant] = useState<ButtonVariant | string>("");

  useEffect(() => {
    const playerWins = JSON.parse(localStorage.getItem("wins")!);
    const playerLoses = JSON.parse(localStorage.getItem("loses")!);
    const playerDraws = JSON.parse(localStorage.getItem("draws")!);
    if (playerDraws && playerWins && playerLoses) {
      setWins(playerWins);
      setLoses(playerLoses);
      setDraws(playerDraws);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setChoseVariant(e.currentTarget.name);
  };

  const randomBotChoice = () => {
    const botChoice = Math.floor(Math.random() * 3);

    if (botChoice === 0) {
      return "rock";
    } else if (botChoice === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };

  useEffect(() => {
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("loses", JSON.stringify(loses));
    localStorage.setItem("draws", JSON.stringify(draws));
  }, [draws, loses, wins]);

  useEffect(() => {
    setResult(rpsRules(randomBotChoice(), choseVariant));
  }, [choseVariant]);

  const buttonSubmit = () => {
    if (!choseVariant) {
      toast.error("Please do your choice!");
      return;
    }
    if (result) {
      if (result === "Draw") {
        setDraws(draws + 1);
        toast("Draw!", {
          icon: "🤝",
        });
      } else if (result === "Win") {
        setWins(wins + 1);
        toast("You win!", {
          icon: "🏆",
        });
      } else {
        setLoses(loses + 1);
        toast("You lose", {
          icon: "😔",
        });
      }
      setChoseVariant("");
    }
  };

  return (
    <>
      <Toaster />
      <div className="container m-auto h-dvh flex justify-center items-center text-white">
        <div className="flex flex-col md:w-80">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-center mb-2">Bot Player</h3>
            <div className="">
              <BotChoice handleClick={handleClick} />
            </div>
          </div>

          <div className="text-center my-4 md:flex justify-between">
            <h2>Your wins: {wins}</h2>
            <h2>Draws: {draws}</h2>
            <h2>Your losses: {loses}</h2>
          </div>

          <div className="flex flex-col-reverse items-center">
            <h3 className="text-2xl font-bold text-center mt-1">You</h3>
            <div className="">
              <Button
                handleClick={handleClick}
                isDisabled={false}
                variant={ButtonVariant.rock}
              />
              <Button
                handleClick={handleClick}
                isDisabled={false}
                variant={ButtonVariant.paper}
              />
              <Button
                handleClick={handleClick}
                isDisabled={false}
                variant={ButtonVariant.scissors}
              />
            </div>
          </div>

          <p className="text-center mt-3">
            {choseVariant
              ? `Your choice: ${choseVariant}`
              : `You haven't chosen`}
          </p>
          <button
            className="bg-[#9F87B9] mt-5 px-5 py-2 rounded hover:bg-[#7f6997] transition-all duration-300"
            type="button"
            onClick={buttonSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
