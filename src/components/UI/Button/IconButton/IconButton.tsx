import './IconButton.scss';

interface IIconButton {
  handleClick: () => void;
  type: string;
}

const IconButton = ({handleClick, type}: IIconButton) => {
  return (
    <div>
      <button type="button" onClick={handleClick} className={`button__icon button__icon_type_${type}`}></button>
    </div>
  );
};

export default IconButton;
