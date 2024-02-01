/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";
import Button from "../shared/Button";
import { ButtonVariant } from "../types/types";
import { IBotButtonProps } from "../types/interfaces";

const BotChoice: FC<IBotButtonProps> = ({ handleClick, randomBotChoice }) => {
  const [randomBotNumber] = useState(randomBotChoice);

  return (
    <div>
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
  );
};

export default BotChoice;
