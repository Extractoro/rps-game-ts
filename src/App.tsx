import { FC, useState } from "react";
import Button from "./shared/Button";
import { ButtonVariant } from "./types/types";

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wins, setWins] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loses, setLoses] = useState<number>(0);
  const [choseVariant, isChoseVariant] = useState<ButtonVariant | string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isChoseVariant(e.currentTarget.name);
  };

  return (
    <div className="container m-auto h-dvh flex justify-center items-center text-white">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-2">Bot Player</h3>
          <div className="">
            <Button
              handleClick={handleClick}
              isDisabled={true}
              variant={ButtonVariant.rock}
            />
            <Button
              handleClick={handleClick}
              isDisabled={true}
              variant={ButtonVariant.paper}
            />
            <Button
              handleClick={handleClick}
              isDisabled={true}
              variant={ButtonVariant.scissors}
            />
          </div>
        </div>

        <div className="my-4 flex justify-between">
          <h2>Your wins: {wins}</h2>
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
          {choseVariant ? `Your choice: ${choseVariant}` : `You haven't chosen`}
        </p>
        <button
          className="bg-[#9F87B9] mt-5 px-5 py-2 rounded hover:bg-[#7f6997] transition-all duration-300"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
