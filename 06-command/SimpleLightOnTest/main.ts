import { GarageDoorOpenCommand } from '../command/GarageDoorOpenCommand';
import { LightOnCommand } from '../command/LightOnCommand';
import { GarageDoor } from '../receiver/GarageDoor';
import { Light } from '../receiver/light';
import { SimpleRemoteControl } from './SimpleRemoteControl';

async function run() {
  const task1 = async () => {
    console.log('Task 1');
    const remote = new SimpleRemoteControl();
    const light = new Light();
    const lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
  };

  const task2 = async () => {
    console.log('Task 2');
    const remote = new SimpleRemoteControl();
    const light = new Light();
    const garageDoor = new GarageDoor();
    const garageOpen = new GarageDoorOpenCommand(garageDoor);
    const lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
    remote.setCommand(garageOpen);
    remote.buttonWasPressed();
  };

  await Promise.all([task1(), task2()]);
}

run();
