import { Amplifier } from '../entity/Amplifier';
import { PopcornPopper } from '../entity/PopcornPopper';
import { Projector } from '../entity/Projector';
import { Screen } from '../entity/Screen';
import { StreamingPlayer } from '../entity/StreamingPlayer';
import { TheaterLights } from '../entity/TheaterLights';
import { Tuner } from '../entity/Tuner';
import { HomeTheaterFacade } from '../HomeTheaterFacade';

class HomeTheaterTest {
  static main() {
    const amplifier = new Amplifier();
    const player = new StreamingPlayer(amplifier);
    const tuner = new Tuner(amplifier);
    const projector = new Projector(player);
    const lights = new TheaterLights();
    const screen = new Screen();
    const popper = new PopcornPopper();

    const homeTheater = new HomeTheaterFacade({
      amplifier: amplifier,
      tuner: tuner,
      player: player,
      projector: projector,
      lights: lights,
      screen: screen,
      popper: popper,
    });

    homeTheater.watchMovie('Raiders of the Lost Ark');
    homeTheater.endMovie();
  }
}

HomeTheaterTest.main();
