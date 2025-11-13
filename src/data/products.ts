import hoodieImg from '@/assets/product-hoodie.jpg';
import joggersImg from '@/assets/product-joggers.jpg';
import longsleeveImg from '@/assets/product-longsleeve.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  sizes: string[];
  details: string;
  material: string;
}

export const products: Product[] = [
  {
    id: 'hoodie-nightskating',
    name: 'Bluza Wyrolowani Nightskating',
    description: 'Bluza z kapturem idealna na nocne przejazdy. Neonowy żółty nadruk świeci w ciemności.',
    price: 189,
    image: hoodieImg,
    images: [hoodieImg],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: 'Wygodna bluza streetwear z logo Wyrolowanych. Gruba bawełna, ciepła i wygodna, idealna na wieczorne przejazdy po mieście. Neonowy nadruk odbija światło latarni.',
    material: '80% bawełna, 20% poliester. Gramatura 320g/m².',
  },
  {
    id: 'joggers-street',
    name: 'Dresy Wyrolowani Street',
    description: 'Sportowe dresy z turkusowym lampasem. Swoboda ruchu na rolkach gwarantowana.',
    price: 159,
    image: joggersImg,
    images: [joggersImg],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: 'Wygodne dresy z elastycznym pasem i kieszeniami. Turkusowy lampas z logo Wyrolowanych doskonale komponuje się z neonowymi światłami miasta nocą.',
    material: '70% bawełna, 30% poliester. Elastyczna tkanina stretch.',
  },
  {
    id: 'longsleeve-night',
    name: 'Longsleeve Nocna Jazda',
    description: 'Koszulka z długim rękawem z fioletowym neonowym nadrukiem. Lekka i oddychająca.',
    price: 99,
    image: longsleeveImg,
    images: [longsleeveImg],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: 'Lekka koszulka longsleeve idealna pod bluzę lub solo w cieplejsze wieczory. Fioletowy neon nadruk Wyrolowanych wyróżnia Cię w tłumie nocnych rolkarzy.',
    material: '100% bawełna. Gramatura 180g/m².',
  },
];
