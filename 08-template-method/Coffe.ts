import { CaffeineBeverage } from './CaffeineBeverage';
import { getUserInput } from './userInput';

export class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('Dripping Coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding Sugar and Milk');
  }

  async customerWantsCondiments() {
    const answer = await getUserInput(
      'Would you like sugar and milk with your coffee (y/n)?'
    );

    return answer === 'y';
  }
}
