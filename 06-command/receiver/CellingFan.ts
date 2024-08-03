export class CellingFan {
  static HIGH = 3;
  static MEDIUM = 2;
  static LOW = 1;
  static OFF = 0;
  location: string;
  speed: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CellingFan.OFF;
  }

  high(): void {
    this.speed = CellingFan.HIGH;
    console.log(this.location + ' ceiling fan is on high');
  }

  medium(): void {
    this.speed = CellingFan.MEDIUM;
    console.log(this.location + ' ceiling fan is on medium');
  }

  low(): void {
    this.speed = CellingFan.LOW;
    console.log(this.location + ' ceiling fan is on low');
  }

  off(): void {
    this.speed = CellingFan.OFF;
    console.log(this.location + ' ceiling fan is off');
  }

  getSpeed(): number {
    return this.speed;
  }
}
