import { CellingFan } from '../receiver/CellingFan';

export class CellingFanMediumCommand {
  private cellingFan: CellingFan;
  private prevSpeed: number = 0;

  constructor(cellingFan: any) {
    this.cellingFan = cellingFan;
  }

  execute(): void {
    this.prevSpeed = this.cellingFan.getSpeed();
    this.cellingFan.medium();
  }

  undo(): void {
    if (this.prevSpeed === CellingFan.HIGH) {
      this.cellingFan.high();
    } else if (this.prevSpeed === CellingFan.MEDIUM) {
      this.cellingFan.medium();
    } else if (this.prevSpeed === CellingFan.LOW) {
      this.cellingFan.low();
    } else if (this.prevSpeed === CellingFan.OFF) {
      this.cellingFan.off();
    }
  }
}
