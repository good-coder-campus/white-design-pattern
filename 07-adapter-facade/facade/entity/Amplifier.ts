import { StreamingPlayer } from './StreamingPlayer';
import { Tuner } from './Tuner';

export class Amplifier {
  tuner: Tuner | null = null;
  player: StreamingPlayer | null = null;

  on(): void {
    console.log('Amplifier is on');
  }

  off(): void {
    console.log('Amplifier is off');
  }

  setStereoSound(): void {
    console.log('Amplifier is set for stereo sound');
  }

  setSurroundSound(): void {
    console.log('Amplifier is set for surround sound');
  }

  setStreamingPlayer(player: StreamingPlayer): void {
    this.player = player;
    console.log('Amplifier is set to streaming player');
  }

  setTuner(tuner: Tuner): void {
    this.tuner = tuner;
    console.log('Amplifier is set to tuner');
  }

  setVolume(level: number): void {
    console.log(`Amplifier volume set to ${level}`);
  }

  toString(): string {
    return 'Amplifier';
  }
}
