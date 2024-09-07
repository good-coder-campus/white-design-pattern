import { HasQuarterState } from './HasQuarterState';
import { NoQuarterState } from './NoQuarterState';
import { SoldOutState } from './SoldOutState';
import { SoldState } from './SoldState';
import { State } from './State';
import { WinnerState } from './WinnerState';

export class GumballMachine {
  soldOutState: State;
  noQuarterState: State;
  hasQuarterState: State;
  soldState: State;
  winnerState: State;

  state: State;
  count = 0;

  constructor(count: number) {
    this.count = count;

    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.state = this.noQuarterState;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State) {
    this.state = state;
  }

  releaseBall() {
    console.log('알맹이가 나가고 있습니다.');
    if (this.count !== 0) {
      this.count--;
    }
  }

  refill(count: number) {
    this.count = count;
    this.state = this.noQuarterState;
    console.log('재고가 ' + this.count + '개로 리셋되었습니다.');
  }

  getCount() {
    return this.count;
  }

  getSoldOutState() {
    return this.soldOutState;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getSoldState() {
    return this.soldState;
  }

  getWinnerState() {
    return this.winnerState;
  }

  toString() {
    return `\n주식회사 왕뽑기\n 재고: ${
      this.count
    }개 \n ${this.state.toString()}\n`;
  }
}
