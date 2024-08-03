import { Command } from '../Command.types';
import { GarageDoor } from '../receiver/GarageDoor';

export class GarageDoorCloseCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(slot: GarageDoor) {
    this.garageDoor = slot;
  }

  execute(): void {
    this.garageDoor.down();
  }

  undo(): void {
    this.garageDoor.up();
  }
}
