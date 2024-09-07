import { GumballMachine } from './GumballMachine';
import { State } from './State';

export class SoldOutState implements State {
  gumBallMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumBallMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('매진되었습니다.');
  }

  ejectQuarter(): void {
    console.log('매진되었습니다.');
  }

  turnCrank(): void {
    console.log('매진되었습니다.');
  }

  dispense(): void {
    console.log('매진되었습니다.');
  }

  toString(): string {
    return '매진';
  }
}
