import "./Footer.scss";
import { page } from '../../utils/consts/Navigation.ts';
import Logo from '../UI/Logo/Logo.tsx';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-item"><Link className="footer__nav-link" to={page.favouritesPage}>Избранное</Link></li>
                    <li className="footer__nav-item"><Link className="footer__nav-link" to={page.cartPage}>Корзина</Link></li>
                    <li className="footer__nav-item"><Link className="footer__nav-link" to={page.contactsPage}>Контакты</Link></li>
                </ul>
            </nav>
            <div>
                <p className="footer__conditions"><a className="footer__nav-link" href="">Условия сервиса</a></p>
                <ul className="footer__langs">
                    <li className="footer__lang-icon"></li>
                    <li className="footer__lang">
                        <button type='button' className="footer__lang-button footer__lang-button_active">Рус</button>
                    </li>
                    <li className="footer__lang">
                        <button type="button" className="footer__lang-button">Eng</button>
                    </li>
                </ul>
            </div>
            <ul className="footer__social">
                <li className="footer__icon footer__icon_type_vk"><a href="https://vk.com/neoflex_ru" target="_blank" rel="noopener noreferrer"><div className="footer__iconLink" /></a></li>
                <li className="footer__icon footer__icon_type_tg"><a href="https://t.me/neoflexcareers" target="_blank"
                                                                     rel="noopener noreferrer">
                  <div className="footer__iconLink" />
                </a></li>
              <li className="footer__icon footer__icon_type_whatsapp"><a href="#" target="_blank"
                                                                         rel="noopener noreferrer">
                <div className="footer__iconLink" />
              </a></li>
            </ul>
        </footer>)
}

export default Footer
