import { headphones, headphonesWireless, TCard } from '../../utils/consts/Cards.ts';
import Item from '../../components/Item/Item.tsx';
import "./MainPage.scss";
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle.tsx';
interface IMainPageProps {
  onBuyClick: (arg0: TCard) => void;
  cartData: TCard[];
}

function MainPage({onBuyClick, cartData}: IMainPageProps) {

    return (
      <>
        <section className="items">
          <SectionTitle>Наушники</SectionTitle>
          <ul className="items__container">
            {headphones?.map((item) => (
              <Item key={item.id}
                    onBuyClick={onBuyClick}
                    item={item}
                    cartData={cartData}
              />
            ))}
          </ul>
        </section>
        <section className="items">
          <SectionTitle>Беспроводные наушники</SectionTitle>
          <ul className="items__container">
            {headphonesWireless?.map((item) => (
              <Item key={item.id}
                    onBuyClick={onBuyClick}
                    item={item}
                    cartData={cartData}
              />
            ))}
          </ul>
        </section>
      </>
    )
}

export default MainPage
