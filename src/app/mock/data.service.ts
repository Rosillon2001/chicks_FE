import { Injectable } from "@angular/core";
// Interfaces
import { Menu } from "./interfaces/menu.interface";
import { Item } from "./interfaces/item.interface";
// Mock Data
import { MenuData } from "./data/menu.data";
import { ItemData } from "./data/item.data";

@Injectable({
  providedIn: "root"
})

export class DataService {

  constructor() { }

  // Return Menu Options
  getMenuData(): Promise<Menu[]> {
    return Promise.resolve(MenuData);
  }

  // Return Items
  getItemData(): Promise<Item[]> {
    return Promise.resolve(ItemData);
  }

}
