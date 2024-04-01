import { ReactNode } from 'react';
import './TextButton.scss'

interface ITextButtonProps {
  handleClick: () => void;
  children: ReactNode;
  isClicked: boolean;
}

const TextButton = ({handleClick, children, isClicked}: ITextButtonProps) => {
  return (
    <button type="button" onClick={handleClick} className="button"
            disabled={isClicked}>{children}</button>
  );
};

export default TextButton;
