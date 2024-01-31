import { FC, useState } from "react";
import Button from "./shared/Button";
import { ButtonVariant } from "./types/types";

const App: FC = () => {
  const [wins, setWins] = useState<number>(0);
  const [loses, setLoses] = useState<number>(0);

  return (
    <div className="container h-dvh flex justify-center items-center text-white">
      <div className="">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-center">Bot Player</h3>
          <div className="">
            <Button isDisabled={true} variant={ButtonVariant.rock} />
            <Button isDisabled={true} variant={ButtonVariant.paper} />
            <Button isDisabled={true} variant={ButtonVariant.scissors} />
          </div>
        </div>

        <div className="my-4 flex justify-between">
          <h2>Your wins: {wins}</h2>
          <h2>Your losses: {loses}</h2>
        </div>

        <div className="flex flex-col-reverse">
          <h3 className="text-2xl font-bold text-center">You</h3>
          <div className="">
            <Button isDisabled={false} variant={ButtonVariant.rock} />
            <Button isDisabled={false} variant={ButtonVariant.paper} />
            <Button isDisabled={false} variant={ButtonVariant.scissors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
