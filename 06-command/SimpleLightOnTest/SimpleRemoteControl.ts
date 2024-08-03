import { Command } from '../Command.types';

export class SimpleRemoteControl {
  private slot: Command | null = null;

  setCommand(command: Command): void {
    this.slot = command;
  }

  buttonWasPressed(): void {
    if (this.slot) {
      this.slot.execute();
    }
  }
}
