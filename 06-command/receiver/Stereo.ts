export class Stereo {
  on(): void {
    console.log('Stereo is on');
  }

  off(): void {
    console.log('Stereo is off');
  }

  setCD(): void {
    console.log('CD is set');
  }

  setVolume(volume: number): void {
    console.log(`Volume is set to ${volume}`);
  }
}
