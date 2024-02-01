import { FC } from "react";
import Button from "../shared/Button";
import { ButtonVariant } from "../types/types";
import { IBotButtonProps } from "../types/interfaces";

const BotChoice: FC<IBotButtonProps> = ({ handleClick }) => {
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
