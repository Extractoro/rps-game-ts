import { ButtonVariant } from "./types";

export interface IButtonProps {
  variant: ButtonVariant;
  isDisabled: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
