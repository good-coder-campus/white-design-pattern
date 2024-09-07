export class GumballMachine {
  SOLD_OUT = 0;
  NO_QUARTER = 1;
  HAS_QUARTER = 2;
  SOLD = 3;

  state = this.SOLD_OUT;
  count = 0;

  constructor(count: number) {
    this.count = count;
    if (count > 0) {
      this.state = this.NO_QUARTER;
    }
  }

  insertQuarter() {
    if (this.state === this.HAS_QUARTER) {
      console.log('동전은 한 개만 넣어 주세요.');
    } else if (this.state === this.NO_QUARTER) {
      this.state = this.HAS_QUARTER;
      console.log('동전을 넣으셨습니다.');
    } else if (this.state === this.SOLD_OUT) {
      console.log('매진되었습니다.');
    } else if (this.state === this.SOLD) {
      console.log('알맹이를 내보내고 있습니다.');
    }
  }

  ejectQuarter() {
    if (this.state === this.HAS_QUARTER) {
      console.log('동전이 반환됩니다.');
      this.state = this.NO_QUARTER;
    } else if (this.state === this.NO_QUARTER) {
      console.log('동전을 넣어 주세요.');
    } else if (this.state === this.SOLD) {
      console.log('이미 알맹이를 뽑으셨습니다.');
    } else if (this.state === this.SOLD_OUT) {
      console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.');
    }
  }

  turnCrank() {
    if (this.state === this.SOLD) {
      console.log('손잡이는 한 번만 돌려 주세요.');
    } else if (this.state === this.NO_QUARTER) {
      console.log('동전을 넣어 주세요.');
    } else if (this.state === this.SOLD_OUT) {
      console.log('매진되었습니다.');
    } else if (this.state === this.HAS_QUARTER) {
      console.log('손잡이를 돌리셨습니다.');
      this.state = this.SOLD;
      this.dispense();
    }
  }

  dispense() {
    if (this.state === this.SOLD) {
      console.log('알맹이가 나가고 있습니다.');
      this.count--;
      if (this.count === 0) {
        console.log('매진되었습니다.');
        this.state = this.SOLD_OUT;
      } else {
        this.state = this.NO_QUARTER;
      }
    } else if (this.state === this.NO_QUARTER) {
      console.log('동전을 넣어 주세요.');
    } else if (this.state === this.SOLD_OUT) {
      console.log('매진입니다.');
    } else if (this.state === this.HAS_QUARTER) {
      console.log('알맹이가 내보낼 수 없습니다.');
    }
  }

  toString() {
    let state = '';
    if (this.state === this.SOLD_OUT) {
      state = '매진';
    } else if (this.state === this.NO_QUARTER) {
      state = '동전 투입 대기 중';
    } else if (this.state === this.HAS_QUARTER) {
      state = '동전 투입 완료';
    } else if (this.state === this.SOLD) {
      state = '알맹이 판매 중';
    }
    return `\n주식회사 왕뽑기\n 남은 개수  : ${this.count} \n ${state}\n`;
  }
}
