import { Plant } from '@/store/cartSlice';
import basilImg from '@/assets/plants/basil.jpg';
import lavenderImg from '@/assets/plants/lavender.jpg';
import rosemaryImg from '@/assets/plants/rosemary.jpg';
import mintImg from '@/assets/plants/mint.jpg';
import aloeVeraImg from '@/assets/plants/aloe-vera.jpg';
import echinaceaImg from '@/assets/plants/echinacea.jpg';
import chamomileImg from '@/assets/plants/chamomile.jpg';

export const plants: Plant[] = [
  // Plantas Aromáticas
  {
    id: 'basil-001',
    name: 'Albahaca Genovesa',
    description: 'Planta aromática perfecta para cocinar. Sus hojas frescas aportan un sabor único a pastas, pizzas y ensaladas.',
    price: 12.99,
    image: basilImg,
    category: 'aromatic',
  },
  {
    id: 'lavender-001',
    name: 'Lavanda Francesa',
    description: 'Hermosa planta aromática con flores púrpuras. Ideal para relajación y perfumar espacios naturalmente.',
    price: 18.99,
    image: lavenderImg,
    category: 'aromatic',
  },
  {
    id: 'rosemary-001',
    name: 'Romero Officinalis',
    description: 'Hierba aromática resistente, perfecta para condimentar carnes y verduras. Fácil de cuidar.',
    price: 14.99,
    image: rosemaryImg,
    category: 'aromatic',
  },
  {
    id: 'mint-001',
    name: 'Menta Piperita',
    description: 'Refrescante planta aromática ideal para infusiones, postres y cócteles. Crece rápidamente.',
    price: 10.99,
    image: mintImg,
    category: 'aromatic',
  },
  
  // Plantas Medicinales
  {
    id: 'aloe-001',
    name: 'Aloe Vera',
    description: 'Planta medicinal conocida por sus propiedades curativas. Ideal para el cuidado de la piel y quemaduras.',
    price: 16.99,
    image: aloeVeraImg,
    category: 'medicinal',
  },
  {
    id: 'echinacea-001',
    name: 'Equinácea Purpúrea',
    description: 'Planta medicinal que fortalece el sistema inmunológico. Hermosas flores púrpuras decorativas.',
    price: 22.99,
    image: echinaceaImg,
    category: 'medicinal',
  },
  {
    id: 'chamomile-001',
    name: 'Manzanilla Común',
    description: 'Planta medicinal relajante perfecta para infusiones. Sus flores blancas son muy decorativas.',
    price: 13.99,
    image: chamomileImg,
    category: 'medicinal',
  },
];

export const plantCategories = {
  aromatic: {
    title: 'Plantas Aromáticas',
    description: 'Perfectas para la cocina y perfumar tu hogar naturalmente',
  },
  medicinal: {
    title: 'Plantas Medicinales',
    description: 'Plantas con propiedades curativas y beneficios para la salud',
  },
};