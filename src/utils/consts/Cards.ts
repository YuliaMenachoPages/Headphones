import pic1 from '../../vendor/images/h1.jpg';
import pic2 from '../../vendor/images/h2.jpg';
import pic3 from '../../vendor/images/h3.jpg';
import pic4 from '../../vendor/images/hw1.jpg';
import pic5 from '../../vendor/images/hw2.jpg';
import pic6 from '../../vendor/images/hw3.jpg';

export type TCard = {
  id: string,
  img: string,
  title: string,
  priceNew: string,
  priceOld: string,
  rate: string,
  quantity: number,
}

const headphones = [
    {
        id: 'h1',
        img: pic1,
        title: 'Apple BYZ S852I',
        priceNew: '2927',
        priceOld: '3527',
        rate: '4.7',
        quantity: 0,
    },
    {
        id: 'h2',
        img: pic2,
        title: 'Apple EarPods',
        priceNew: '2327',
        priceOld: '',
        rate: '4.5',
        quantity: 0,
    },
    {
        id: 'h3',
        img: pic3,
        title: 'Apple EarPods',
        priceNew: '2327',
        priceOld: '',
        rate: '4.5',
        quantity: 0,
    },
    {
        id: 'h4',
        img: pic1,
        title: 'Apple BYZ S852I',
        priceNew: '2927',
        priceOld: '',
        rate: '4.7',
        quantity: 0,
    },
    {
        id: 'h5',
        img: pic2,
        title: 'Apple EarPods',
        priceNew: '2327',
        priceOld: '',
        rate: '4.5',
        quantity: 0,
    },
    {
        id: 'h6',
        img: pic3,
        title: 'Apple EarPods',
        priceNew: '2327',
        priceOld: '',
        rate: '4.5',
        quantity: 0,
    },
]
const headphonesWireless = [
    {
        id: 'hw1',
        img: pic4,
        title: 'Apple AirPods',
        priceNew: '9527',
        priceOld: '',
        rate: '4.7',
        quantity: 0,
    },
    {
        id: 'hw2',
        img: pic5,
        title: 'GERLAX GH-04',
        priceNew: '6527',
        priceOld: '',
        rate: '4.7',
        quantity: 0,
    },
    {
        id: 'hw3',
        img: pic6,
        title: 'BOROFONE BO4',
        priceNew: '7527',
        priceOld: '',
        rate: '4.7',
        quantity: 0,
    },
]

export {headphones, headphonesWireless}
