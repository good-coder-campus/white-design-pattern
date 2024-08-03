export class Light {
  private name: string;

  constructor(name = '') {
    this.name = name;
  }
  on(): void {
    console.log(this.name + ' Light is on');
  }

  off(): void {
    console.log(this.name + ' Light is off');
  }
}
