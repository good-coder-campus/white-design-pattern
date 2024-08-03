import { Command } from '../Command.types';

export class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}
