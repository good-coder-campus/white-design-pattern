import { Command } from '../Command.types';
import { GarageDoor } from '../receiver/GarageDoor';

export class GarageDoorOpenCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(slot: GarageDoor) {
    this.garageDoor = slot;
  }

  execute(): void {
    this.garageDoor.up();
  }

  undo(): void {
    this.garageDoor.down();
  }
}
