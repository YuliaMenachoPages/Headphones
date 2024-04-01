import AppRoutes from './Routes.tsx';
import { useState } from 'react';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import { TCard } from '../utils/consts/Cards.ts';
import "./App.scss";

function App() {
  const [cartData, setCartData] = useState<TCard[]>(sessionStorage.getItem('cartData') ? JSON.parse(sessionStorage.getItem('cartData')!) : [])
  const [cartCount, setCartCount] = useState<number>(cartData.length > 0 ? JSON.parse(sessionStorage.getItem('cartData')!).map((cartItem: TCard) => (cartItem.quantity)).reduce((a: number, b: number) => a + b) : 0)

  const handleCartData = () => {
    setCartData(sessionStorage.getItem('cartData') ? JSON.parse(sessionStorage.getItem('cartData')!) : [])
  }

  const handleBuyClick = (item: TCard) => {
    item["quantity"] = 1
    const cartDataStorage = cartData;
    cartDataStorage.push(item);
    sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
    handleCartData();
    handleCartCount()
  }

  const handleDeleteClick = (item: TCard) => {
    const itemToDelete = cartData.filter((itemToStay: TCard) => itemToStay.id !== item.id);
    sessionStorage.setItem('cartData', JSON.stringify(itemToDelete));
    handleCartData();
    handleCartCount()
  }

  function handleCartCount() {
    setCartCount( (sessionStorage.getItem('cartData') && JSON.parse(sessionStorage.getItem('cartData')!).length > 0) ? JSON.parse(sessionStorage.getItem('cartData')!).map((cartItem: TCard) => (cartItem.quantity)).reduce((a: number, b: number) => a + b) : 0)
  }
  return (
    <div className="page">
      <Header cartCount={cartCount}/>
      <main className="main">
      <AppRoutes
        onBuyClick={handleBuyClick}
        cartData={cartData}
        onDeleteClick={handleDeleteClick}
        onCartCount={handleCartCount}
      />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
