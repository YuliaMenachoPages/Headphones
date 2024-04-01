import './ColoredButton.scss'
import { ReactNode } from 'react';

interface IColoredButtonProps {
  handleClick?: () => void;
  children: ReactNode;
}

const ColoredButton = ({handleClick, children}: IColoredButtonProps) => {
  return (
    <button type="button" className="coloredButton" onClick={handleClick}>{children}</button>
  );
};

export default ColoredButton;
