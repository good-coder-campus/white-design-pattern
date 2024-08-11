import { StreamingPlayer } from './StreamingPlayer';

export class Projector {
  player: StreamingPlayer;

  constructor(player: StreamingPlayer) {
    this.player = player;
  }

  on(): void {
    console.log('Projector on');
  }

  off(): void {
    console.log('Projector off');
  }

  wideScreenMode(): void {
    console.log('Projector in widescreen mode (16x9 aspect ratio)');
  }

  tvMode(): void {
    console.log('Projector in tv mode (4x3 aspect ratio)');
  }

  toString(): string {
    return 'Projector';
  }
}
