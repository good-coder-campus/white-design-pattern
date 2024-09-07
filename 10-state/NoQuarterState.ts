import { GumballMachine } from './GumballMachine';
import { State } from './State';

export class NoQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('동전을 넣으셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log('동전을 넣어 주세요.');
  }

  turnCrank(): void {
    console.log('동전을 넣어 주세요.');
  }

  dispense(): void {
    console.log('동전을 넣어 주세요.');
  }

  toString(): string {
    return '동전 투입 대기중';
  }
}
