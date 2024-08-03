import { GarageDoorCloseCommand } from '../command/GarageDoorOffCommand';
import { GarageDoorOpenCommand } from '../command/GarageDoorOpenCommand';
import { LightOffCommand } from '../command/LightOffCommand';
import { LightOnCommand } from '../command/LightOnCommand';
import { MacroCommand } from '../command/MacroCommand';
import { StereoOffWithCDCommand } from '../command/StereoOffWithCDCommand';
import { StereoOnWithCDCommand } from '../command/StereoOnWithCDCommand';
import { GarageDoor } from '../receiver/GarageDoor';
import { Light } from '../receiver/light';
import { Stereo } from '../receiver/stereo';
import { RemoteControlWithUndo } from './RemoteControlWithUndo';

async function task1() {
  console.log('---------Task 1---------');
  const remoteControl = new RemoteControlWithUndo();

  const light = new Light('Living Room');
  const garageDoor = new GarageDoor();
  const stereo = new Stereo();

  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);
  const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
  const garageDoorClose = new GarageDoorCloseCommand(garageDoor);
  const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
  const stereoOffWithCD = new StereoOffWithCDCommand(stereo);

  const partyOn = [lightOn, garageDoorOpen, stereoOnWithCD];
  const partyOff = [lightOff, garageDoorClose, stereoOffWithCD];

  const partyOnMacro = new MacroCommand(partyOn);
  const partyOffMacro = new MacroCommand(partyOff);

  remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

  console.log('\nParty On Macro');
  remoteControl.onButtonWasPushed(0);

  console.log('\nParty Off Macro');
  remoteControl.offButtonWasPushed(0);

  console.log('\nUndo Party Off Macro');
  remoteControl.undoButtonWasPushed();
}

async function run() {
  await Promise.all([task1()]);
}

run();
