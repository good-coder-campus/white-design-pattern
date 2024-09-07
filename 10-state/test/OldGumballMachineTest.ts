import { GumballMachine } from '../OldGumballMachine';

export class GumballTest {
  public static main(): void {
    const gumballMachine = new GumballMachine(5);
    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.ejectQuarter();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
  }
}

GumballTest.main();
