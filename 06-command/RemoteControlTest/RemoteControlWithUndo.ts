import { Command } from '../Command.types';
import { NoCommand } from '../command/NoCommand';

export class RemoteControlWithUndo {
  onCommands: Command[] = [];
  offCommands: Command[] = [];
  undoCommand: Command = new NoCommand();

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
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }

  public toString(): string {
    let result = '\n------ Remote Control -------\n';
    for (let i = 0; i < this.onCommands.length; i++) {
      result += `[slot ${i}] ${this.onCommands[i].constructor.name}   ${this.offCommands[i].constructor.name}\n`;
    }
    result += `[undo] ${this.undoCommand.constructor.name}\n`;
    return result;
  }
}
