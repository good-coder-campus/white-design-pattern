import { PancakeMenuIterator } from './iterator/PancagkeMenuIterator';
import { MenuItem } from './MenuItem';

export class PancakeHouseMenu {
  menuItems: MenuItem[] = [];

  constructor() {
    this.addItem(
      'K&B’s Pancake Breakfast',
      'Pancakes with scrambled eggs, and toast',
      true,
      2.99
    );
    this.addItem(
      'Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99
    );
    this.addItem(
      'Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.49
    );
    this.addItem(
      'Waffles',
      'Waffles, with your choice of blueberries or strawberries',
      true,
      3.59
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  public createIterator(): Iterator<MenuItem> {
    return new PancakeMenuIterator(this.menuItems);
  }
}
