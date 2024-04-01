//Здесь должен быть переход на страницу оплаты после ее подключения. А пока переход на главную ЮKassa

import CartItem from '../../components/CartItem/CartItem.tsx';
import { TCard } from '../../utils/consts/Cards.ts';
import "./CartPage.scss"
import PageTitle from '../../components/UI/PageTitle/PageTitle.tsx';
import ColoredButton from '../../components/UI/Button/ColoredButton/ColoredButton.tsx';
interface ICartPageProps {
  cartData: TCard[];
  onDeleteClick: (arg0: TCard) => void;
  onCartCount: () => void;
}

function CartPage({cartData, onDeleteClick, onCartCount}: ICartPageProps) {

  const total = cartData.length !== 0 ? cartData.map((cartItem) => (parseInt(cartItem.priceNew) * cartItem.quantity)).reduce((total, amount) => total + amount) : 0



    return (
      <section className="cart">
        <PageTitle>Корзина</PageTitle>
        <div className="cart__container">
          <ul className="cart__items-container">
            {cartData?.map((cartItem: TCard) => (
              <CartItem key={cartItem.id}
                        onDeleteClick={onDeleteClick}
                        cartItem={cartItem}
                        cartData={cartData}
                        onCartCount={onCartCount}
              />))}
          </ul>
          <div className="cart__buy">
            <div className="cart__total-amount">
              <p className="cart__total">Итого</p>
              <p className="cart__amount">{total}</p>
            </div>
            <ColoredButton><a className="cart__button-link" href="https://yookassa.ru/" target="_blank"
                              rel="noopener noreferrer">Перейти к оформлению</a></ColoredButton>
          </div>
        </div>
      </section>
    )
}

export default CartPage
