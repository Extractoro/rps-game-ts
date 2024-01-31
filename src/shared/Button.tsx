import { FC } from "react";
import { ButtonVariant } from "../types/types";
import { IButtonProps } from "../types/interfaces";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import rock from "../assets/rock.png";

const Button: FC<IButtonProps> = ({ variant, isDisabled }) => {
  return (
    <button disabled={isDisabled} name={variant}>
      {variant === ButtonVariant.rock && (
        <img
          src={rock}
          alt={ButtonVariant.rock}
          className={`w-16 mr-3 ${
            isDisabled ? `opacity-65` : `hover:w-20 transition-all duration-300`
          } `}
        />
      )}
      {variant === ButtonVariant.paper && (
        <img
          src={paper}
          alt={ButtonVariant.paper}
          className={`w-16 mr-3 ${
            isDisabled ? `opacity-65` : `hover:w-20 transition-all duration-300`
          } `}
        />
      )}
      {variant === ButtonVariant.scissors && (
        <img
          src={scissors}
          alt={ButtonVariant.scissors}
          className={`w-16 mr-3 last:mr-0 ${
            isDisabled ? `opacity-65` : `hover:w-20 transition-all duration-300`
          }  `}
        />
      )}
    </button>
  );
};

export default Button;
