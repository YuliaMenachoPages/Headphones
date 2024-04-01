import { Route, Routes } from "react-router-dom";
import {page} from "../utils/consts/Navigation";
import MainPage from "../pages/MainPage/MainPage";
import CartPage from "../pages/CartPage/CartPage";
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage.tsx';
import { TCard } from '../utils/consts/Cards.ts';

interface IAppRoutesProps {
  onBuyClick: (arg0: TCard) => void;
  cartData: TCard[];
  onDeleteClick: (arg0: TCard) => void;
  onCartCount: () => void;
}

function AppRoutes({onBuyClick, cartData, onDeleteClick, onCartCount}: IAppRoutesProps) {
    return (
        <Routes>
                <Route path={page.mainPage} element={<MainPage
                  onBuyClick={onBuyClick}
                  cartData={cartData}
                />} />
                <Route path={page.cartPage} element={<CartPage
                  cartData={cartData}
                  onDeleteClick={onDeleteClick}
                  onCartCount={onCartCount}
                />} />
                <Route path={page.favouritesPage} element={<FavouritesPage />} />
                <Route path={page.contactsPage} element={<ContactsPage />} />
                <Route path={page.errorPage} element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes;
