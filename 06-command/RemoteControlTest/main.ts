import { CellingFanHighCommand } from '../command/CellingFanHighCommand';
import { CellingFanMediumCommand } from '../command/CellingFanMediumCommand';
import { CellingFanOffCommand } from '../command/CellingFanOffCommand';
import { GarageDoorCloseCommand } from '../command/GarageDoorOffCommand';
import { GarageDoorOpenCommand } from '../command/GarageDoorOpenCommand';
import { LightOffCommand } from '../command/LightOffCommand';
import { LightOnCommand } from '../command/LightOnCommand';
import { StereoOffWithCDCommand } from '../command/StereoOffWithCDCommand';
import { StereoOnWithCDCommand } from '../command/StereoOnWithCDCommand';
import { CellingFan } from '../receiver/CellingFan';
import { GarageDoor } from '../receiver/GarageDoor';
import { Light } from '../receiver/light';
import { Stereo } from '../receiver/stereo';
import { RemoteControl } from './RemoteControl';
import { RemoteControlWithUndo } from './RemoteControlWithUndo';

async function task1() {
  console.log('---------Task 1---------');
  const remoteControl = new RemoteControl();
  const livingRoomLight = new Light('Living Room');
  const kitchenLight = new Light('Kitchen');
  const garageDoor = new GarageDoor();
  const stereo = new Stereo();

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);
  const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
  const garageDoorClose = new GarageDoorCloseCommand(garageDoor);
  const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
  const stereoOffWithCD = new StereoOffWithCDCommand(stereo);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
  remoteControl.setCommand(2, garageDoorOpen, garageDoorClose);
  remoteControl.setCommand(3, stereoOnWithCD, stereoOffWithCD);

  console.log(remoteControl.toString());

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  remoteControl.onButtonWasPushed(1);
  remoteControl.offButtonWasPushed(1);
  remoteControl.onButtonWasPushed(2);
  remoteControl.offButtonWasPushed(2);
  remoteControl.onButtonWasPushed(3);
  remoteControl.offButtonWasPushed(3);
}

async function task2() {
  console.log('---------Task 2---------');
  const remoteControl = new RemoteControlWithUndo();
  const livingRoomLight = new Light('Living Room');

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);

  console.log(remoteControl.toString());

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  console.log(remoteControl.toString());

  remoteControl.undoButtonWasPushed();
  remoteControl.offButtonWasPushed(0);
  remoteControl.onButtonWasPushed(0);

  console.log(remoteControl.toString());
  remoteControl.undoButtonWasPushed();
}

const task3 = async () => {
  console.log('---------Task 3---------');
  const remoteControl = new RemoteControlWithUndo();

  const cellingFan = new CellingFan('Living Room');

  const cellingFanMedium = new CellingFanMediumCommand(cellingFan);
  const cellingFanHigh = new CellingFanHighCommand(cellingFan);
  const cellingFanOff = new CellingFanOffCommand(cellingFan);

  remoteControl.setCommand(0, cellingFanMedium, cellingFanOff);
  remoteControl.setCommand(1, cellingFanHigh, cellingFanOff);

  remoteControl.onButtonWasPushed(0);
  remoteControl.offButtonWasPushed(0);
  console.log(remoteControl.toString());
  remoteControl.undoButtonWasPushed();

  remoteControl.onButtonWasPushed(1);
  console.log(remoteControl.toString());
  remoteControl.undoButtonWasPushed();
};

async function run() {
  await Promise.all([task1(), task2(), task3()]);
}

run();
