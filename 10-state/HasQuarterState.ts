import { GumballMachine } from './GumballMachine';
import { State } from './State';

export class HasQuarterState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('동전은 한 개만 넣어주세요.');
  }

  ejectQuarter(): void {
    console.log('동전이 반환됩니다.');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log('손잡이를 돌리셨습니다.');

    const winner = Math.random() < 0.1;
    if (winner && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense(): void {
    console.log('알맹이가 나갈 수 없습니다.');
  }

  toString(): string {
    return '동전이 투입 완료';
  }
}
