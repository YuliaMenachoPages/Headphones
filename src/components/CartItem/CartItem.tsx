import {useState} from "react"
import { TCard } from '../../utils/consts/Cards.ts';
import "./CartItem.scss";

interface ICartItem {
  cartData: TCard[] | [];
  cartItem: TCard;
  onCartCount: () => void;
  onDeleteClick: (arg0: TCard) => void;
}

function CartItem({cartData, cartItem, onCartCount, onDeleteClick}: ICartItem ) {
    const [itemCount, setItemCount] = useState( cartData ? cartData.find(currentItem => currentItem.id === cartItem.id)!.quantity : 0);
    const isDisabled = (itemCount <= 1);
    const amount = parseInt(cartItem.priceNew) * cartItem.quantity;


    function handleDecrement() {
        const cartDataStorage = cartData
        const index = cartData.findIndex(currentItem => currentItem.id === cartItem.id)
        cartDataStorage[index].quantity = itemCount - 1
        sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
        setItemCount(itemCount - 1)
        onCartCount();
    }

    function handleIncrement() {
        const cartDataStorage = cartData
        const index = cartData.findIndex(currentItem => currentItem.id === cartItem.id)
        cartDataStorage[index].quantity = itemCount + 1
        sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
        setItemCount(itemCount + 1)
        onCartCount();
    }

    function handleDelete() {
        onDeleteClick(cartItem)
    }

    return (
        <li className="cart-item">
            <div className="cart-item__column-one">
                <img src={cartItem.img} alt="Фото товара" className="cart-item__picture"/>
                <div className="cart-item__incrementer">
                    <button className="cart-item__button cart-item__button_type_decreaser" disabled={isDisabled}
                            onClick={handleDecrement}></button>
                    <p className="cart-item__increment-counter">{itemCount}</p>
                    <button className="cart-item__button cart-item__button_type_increaser"
                            onClick={handleIncrement}></button>
                </div>
            </div>
            <div className="cart-item__column-two">
                <h3 className="cart-item__name">{cartItem.title}</h3>
                <p className="cart-item__price">{cartItem.priceNew}</p>
            </div>
            <div className="cart-item__column-three">
                <button className="cart-item__delete" onClick={handleDelete}></button>
                <p className="cart-item__amount">{amount}</p>
            </div>
        </li>
    )
}

export default CartItem
