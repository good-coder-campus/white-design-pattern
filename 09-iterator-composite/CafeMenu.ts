import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

export class CafeMenu implements Menu {
  private menuItems: Map<string, MenuItem> = new Map();

  public constructor() {
    this.addItem(
      'Veggie Burger and Air Fries',
      'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
      true,
      3.99
    );
    this.addItem(
      'Soup of the day',
      'A cup of the soup of the day, with a side salad',
      false,
      3.69
    );
    this.addItem(
      'Burrito',
      'A large burrito, with whole pinto beans, salsa, guacamole',
      true,
      4.29
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.set(name, menuItem);
  }

  public createIterator(): Iterator<MenuItem> {
    return this.menuItems.values();
  }
}
