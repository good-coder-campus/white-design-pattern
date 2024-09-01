import { CafeMenu } from '../CafeMenu';
import { DinerMenu } from '../DinerMenu';
import { PancakeHouseMenu } from '../PancakeHouseMenu';
import { Waitress } from '../iterator/Waitress';

export class IteratorTest {
  public static main(): void {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinerMenu = new DinerMenu();
    const cafeMenu = new CafeMenu();

    const waitress = new Waitress([pancakeHouseMenu, dinerMenu, cafeMenu]);
    waitress.printMenu();
  }
}

IteratorTest.main();
