import { TCard } from '../../utils/consts/Cards.ts';
import "./Item.scss";
import TextButton from '../UI/Button/TextButton/TextButton.tsx';

interface IItemProps {
  cartData: TCard[];
  onBuyClick: (arg0: TCard) => void;
  item: TCard;
}

function Item({cartData, onBuyClick, item}: IItemProps) {
    const isClicked = cartData.some(currentItem => currentItem.id === item.id);

    const handleClick = () => {
        onBuyClick(item);
        item.quantity = 1
    }

    const oldPriceClassName = (
        `item__old-price ${item.priceOld.length !== 0 && 'item__old-price_active'}`);

    const buttonText = isClicked ? 'Товар в корзине' : 'Купить'

    return (
        <li>
            <div className="item">
                <div className="item__img-wrapper">
                    <img src={item.img} alt="Фото товара" className="item__picture"/>
                </div>
                <div className="item__wrapper">
                    <div className="item__info">
                        <h3 className="item__name">{item.title}</h3>
                        <div>
                            <p className="item__new-price">{item.priceNew}</p>
                            <p className={oldPriceClassName}>{item.priceOld}</p>
                        </div>
                    </div>
                    <div className="item__price">
                        <div className="item__points">
                            <button className="item__star"></button>
                            <p className="item__star-counter">{item.rate}</p>
                        </div>
                        <TextButton handleClick={handleClick} isClicked={isClicked}>{buttonText}</TextButton>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Item

