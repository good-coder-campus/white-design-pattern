import { CafeMenu } from '../CafeMenu';
import { DinerMenu } from '../DinerMenu';
import { PancakeHouseMenu } from '../PancakeHouseMenu';
import { Menu } from '../composite/Menu';
import { MenuComponent } from '../composite/MenuComponent';
import { MenuItem } from '../composite/MenuItem';
import { Waitress } from '../composite/Waitress';

export class IteratorTest {
  public static main(): void {
    const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast');
    const dinerMenu = new Menu('DINER MENU', 'Lunch');
    const cafeMenu = new Menu('CAFE MENU', 'Dinner');
    const dessertMenu = new Menu('DESSERT MENU', 'Dessert of course!');

    const allMenus = new Menu('ALL MENUS', 'All menus combined');
    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinerMenu);
    allMenus.add(cafeMenu);

    dinerMenu.add(
      new MenuItem('Pasta', 'Spaghetti with Marinara Sauce', true, 3.89)
    );
    dinerMenu.add(dessertMenu);

    const waitress = new Waitress(allMenus);
    waitress.printMenu();
  }
}

IteratorTest.main();
