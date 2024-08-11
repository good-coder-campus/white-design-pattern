import { Amplifier } from './entity/Amplifier';
import { PopcornPopper } from './entity/PopcornPopper';
import { Projector } from './entity/Projector';
import { Screen } from './entity/Screen';
import { StreamingPlayer } from './entity/StreamingPlayer';
import { TheaterLights } from './entity/TheaterLights';
import { Tuner } from './entity/Tuner';

export class HomeTheaterFacade {
  amplifier: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;

  constructor({
    amplifier,

    tuner,
    player,
    projector,
    lights,
    screen,
    popper,
  }: {
    amplifier: Amplifier;
    tuner: Tuner;
    player: StreamingPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;
  }) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setStreamingPlayer(this.player);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  endMovie(): void {
    console.log('Shutting movie theater down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.player.stop();
    this.player.off();
  }
}
