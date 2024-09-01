import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';

export class Waitress {
  menus: Menu[];

  constructor(menus: Menu[]) {
    this.menus = menus;
  }

  public printMenu(): void {
    const iterator = this.menus[Symbol.iterator]();

    let result = iterator.next();
    while (result.done === false) {
      const menu = result.value;
      this.printMenuItem(menu.createIterator());
    }
  }

  private printMenuItem(iterator: Iterator<MenuItem>): void {
    let result = iterator.next();
    while (result.done === false) {
      const menuItem = result.value;
      result = iterator.next();
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );
    }
  }
}
