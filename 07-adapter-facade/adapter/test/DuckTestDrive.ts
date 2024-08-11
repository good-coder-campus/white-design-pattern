import { TurkeyAdapter } from '../adaptetr/TurkeyAdapter';
import { Duck } from '../entity/Duck';
import { MallardDuck } from '../entity/MallardDuck';
import { WildTurkey } from '../entity/WildTurkey';

export class DuckTestDrive {
  public static main(): void {
    const duck = new MallardDuck();
    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log('The Turkey says...');
    turkey.gobble();
    turkey.fly();

    console.log('\nThe Duck says...');
    DuckTestDrive.testDuck(duck);

    console.log('\nThe TurkeyAdapter says...');
    DuckTestDrive.testDuck(turkeyAdapter);
  }

  private static testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
  }
}

DuckTestDrive.main();
