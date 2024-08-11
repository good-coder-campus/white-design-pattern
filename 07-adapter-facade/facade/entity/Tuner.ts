import { Amplifier } from './Amplifier';

export class Tuner {
  amplifier: Amplifier;

  constructor(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  on(): void {
    console.log('Tuner is on');
  }

  off(): void {
    console.log('Tuner is off');
  }

  setFrequency(frequency: number): void {
    console.log(`Tuner setting frequency to ${frequency}`);
  }

  setAm(): void {
    console.log('Tuner setting AM mode');
  }

  setFm(): void {
    console.log('Tuner setting FM mode');
  }

  toString(): string {
    return 'Tuner';
  }
}
