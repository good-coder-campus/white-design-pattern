import { Command } from '../Command.types';
import { NoCommand } from '../command/NoCommand';

export class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];

  constructor() {
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = new NoCommand();
      this.offCommands[i] = new NoCommand();
    }
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    let result = '\n------ Remote Control -------\n';
    for (let i = 0; i < this.onCommands.length; i++) {
      result += `[slot ${i}] ${this.onCommands[i].constructor.name}   ${this.offCommands[i].constructor.name}\n`;
    }
    return result;
  }
}
