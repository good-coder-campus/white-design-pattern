import { Duck } from '../entity/Duck';
import { Turkey } from '../entity/Turkey';

export class DuckAdapter implements Turkey {
  private duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  gobble(): void {
    this.duck.quack();
  }

  fly(): void {
    this.duck.fly();
  }
}
