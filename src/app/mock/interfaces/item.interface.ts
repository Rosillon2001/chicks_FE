export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Starter' | 'Consumable' |'Legendary' | 'Mythic';
  quantity: number;
  on_sale: OnSale;
  in_stock: boolean;
}

export interface OnSale {
  on_sale: boolean;
  prev_price?: number;
}
