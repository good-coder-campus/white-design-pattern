import { Amplifier } from './Amplifier';

export class StreamingPlayer {
  amplifier: Amplifier;

  constructor(amplifier: Amplifier) {
    this.amplifier = amplifier;
  }

  on(): void {
    console.log('Streaming player is on');
  }

  off(): void {
    console.log('Streaming player is off');
  }

  play(movie: string): void {
    console.log('Streaming player is playing ' + movie);
  }

  pause(): void {
    console.log('Streaming player is paused');
  }

  setSurroundAudio(): void {
    console.log('Streaming player is set to surround audio');
  }

  setTwoChannelAudio(): void {
    console.log('Streaming player is set to two channel audio');
  }

  stop(): void {
    console.log('Streaming player is stopped');
  }

  toString(): string {
    return 'Streaming player';
  }
}
