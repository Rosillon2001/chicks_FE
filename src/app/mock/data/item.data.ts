// Interfaces
import { Item } from '../interfaces/item.interface';

// route '../../../assets/items'
// Mock data
export const ItemData: Item[] = [
  {
    id: 1,
    name: 'Dark Seal',
    price: 350,
    description: 'Get Advantage of your killing thirst!',
    image: '../../../assets/items/Dark_Seal_item.png',
    category: 'Starter',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 2,
    name: 'Doran\'s Ring',
    price: 400,
    description: 'A safe start for mages.',
    image: '../../../assets/items/Doran_Ring_item.png',
    category: 'Starter',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 3,
    name: 'Doran\'s Shield',
    price: 450,
    description: 'A safe start for tanks.',
    image: '../../../assets/items/Doran_Shield_item.png',
    category: 'Starter',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 4,
    name: 'Doran\'s Blade',
    price: 400,
    description: 'A safe start for fighters.',
    image: '../../../assets/items/Doran_Blade_item.png',
    category: 'Starter',
    quantity: 1,
    on_sale: {
      on_sale: false,
      prev_price: 450
    },
    in_stock: true
  },
  {
    id: 5,
    name: 'Tear of the Goddess',
    price: 400,
    description: 'A safe start for mages.',
    image: '../../../assets/items/Tear_of_the_Goddess_item.png',
    category: 'Starter',
    quantity: 0,
    on_sale: {
      on_sale: false
    },
    in_stock: false
  }
];
