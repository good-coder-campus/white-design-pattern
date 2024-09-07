import { GumballMachine } from './GumballMachine';
import { State } from './State';

export class SoldState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('잠깐만 기다려 주세요. 알맹이가 나가고 있습니다.');
  }

  ejectQuarter(): void {
    console.log('이미 알맹이를 뽑으셨습니다.');
  }

  turnCrank(): void {
    console.log('손잡이는 한 번만 돌려주세요.');
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('더 이상 알맹이가 없습니다.');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }

  toString(): string {
    return '알맹이가 나가는 중';
  }
}
