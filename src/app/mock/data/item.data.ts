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
      on_sale: true,
      prev_price: 400
    },
    in_stock: true
  },
  {
    id: 2,
    name: 'Doran\'s Ring',
    price: 400,
    description: 'A safe start for mages. Recovers Mana on ememy champion hit.',
    image: '../../../assets/items/Doran_Ring_item.png',
    category: 'Starter',
    quantity: 1,
    on_sale: {
      on_sale: true,
      prev_price: 450
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
      on_sale: true,
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
  },
  {
    id: 6,
    name: 'Health Potion',
    price: 50,
    description: 'Recovers 150 health over 15 seconds.',
    image: '../../../assets/items/Health_Potion_item.png',
    category: 'Consumable',
    quantity: 10,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 7,
    name: 'Refillable Potion',
    price: 150,
    description: 'Refills at shop. Holds 2 charges.',
    image: '../../../assets/items/Refillable_Potion_item.png',
    category: 'Consumable',
    quantity: 2,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 8,
    name: 'Blade of the Ruined King',
    price: 3000,
    description: 'Anti-tank item.',
    image: '../../../assets/items/Blade_of_the_Ruined_King_item.png',
    category: 'Legendary',
    quantity: 1,
    on_sale: {
      on_sale: true,
      prev_price: 3400
    },
    in_stock: true
  },
  {
    id: 9,
    name: 'Spirit\'s Visage',
    price: 2800,
    description: 'Anti-mage and healing item.',
    image: '../../../assets/items/Spirit_Visage_item.png',
    category: 'Legendary',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 10,
    name: 'Rabadon\'s Deathcap',
    price: 3000,
    description: 'Increases ability power by 40%.',
    image: '../../../assets/items/Rabadon_Deathcap_item.png',
    category: 'Legendary',
    quantity: 1,
    on_sale: {
      on_sale: true,
      prev_price: 3600
    },
    in_stock: true
  },
  {
    id: 11,
    name: 'Bloodthirster',
    price: 3400,
    description: 'High damage and lifesteal.',
    image: '../../../assets/items/Bloodthirster_item.png',
    category: 'Legendary',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 12,
    name: 'Infinity Edge',
    price: 3400,
    description: 'High damage and critical strike.',
    image: '../../../assets/items/Infinity_Edge_item.png',
    category: 'Mythic',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: false
  },
  {
    id: 13,
    name: 'Crown of the Shattered Queen',
    price: 3400,
    description: 'Protects against burst damage.',
    image: '../../../assets/items/Crown_of_the_Shattered_Queen_item.png',
    category: 'Mythic',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: true
  },
  {
    id: 14,
    name: 'Goredrinker',
    price: 3400,
    description: 'High damage and lifesteal.',
    image: '../../../assets/items/Goredrinker_item.png',
    category: 'Mythic',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: false
  },
  {
    id: 15,
    name: 'Heartsteel',
    price: 3400,
    description: 'Increases 2% max health when performing a basic attack to an enemy champion within 3 seconds.',
    image: '../../../assets/items/Heartsteel_item.png',
    category: 'Mythic',
    quantity: 1,
    on_sale: {
      on_sale: false
    },
    in_stock: false
  }
];
