export class TheaterLights {
  dim(level: number): void {
    console.log(`Theater Ceiling Lights dimming to ${level}%`);
  }

  on(): void {
    console.log('Theater Ceiling Lights on');
  }

  off(): void {
    console.log('Theater Ceiling Lights off');
  }

  toString(): string {
    return 'Theater Lights';
  }
}
