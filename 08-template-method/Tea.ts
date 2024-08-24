import { CaffeineBeverage } from './CaffeineBeverage';
import { getUserInput } from './userInput';

export class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Adding Lemon');
  }

  async customerWantsCondiments() {
    const answer = await getUserInput(
      'Would you like lemon with your tea (y/n)?'
    );

    return answer === 'y';
  }
}
