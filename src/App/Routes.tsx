import { Route, Routes } from "react-router-dom";
import {page} from "../utils/consts/Navigation";
import MainPage from "../pages/MainPage/MainPage";
import CartPage from "../pages/CartPage/CartPage";
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage.tsx';

function AppRoutes() {
    return (
        <Routes>
                <Route path={page.mainPage} element={<MainPage />} />
                <Route path={page.cartPage} element={<CartPage />} />
                <Route path={page.favouritesPage} element={<FavouritesPage />} />
                <Route path={page.contactsPage} element={<ContactsPage />} />
                <Route path={page.errorPage} element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes;
