import {useNavigate} from "react-router-dom";
import "./Header.scss";
import Logo from '../UI/Logo/Logo.tsx';
import { page } from '../../utils/consts/Navigation.ts';
import IconButton from '../UI/Button/IconButton/IconButton.tsx';
interface IHeaderProps {
  cartCount: number;
}

function Header({cartCount}: IHeaderProps) {
    const navigate = useNavigate();

    const goToCart = () => {
        navigate(page.cartPage, {replace: true})
    }

  const goToFavorites = () => {
    navigate(page.favouritesPage, {replace: true})
  }

    return (
        <header className="header">
            <Logo />
            <div className="header__info">
                <div className="header__icons">
<IconButton handleClick={goToFavorites} type="like" />
                  <div className="header__counter-area">
                        <p className="header__counter">2</p>
                    </div>
                </div>
                <div className="header__icons">
                  <IconButton handleClick={goToCart} type="cart" />
                    <div className="header__counter-area">
                        <p className="header__counter">{cartCount}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
