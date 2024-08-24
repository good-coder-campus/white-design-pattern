export abstract class CaffeineBeverage {
  async prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  boilWater(): void {
    console.log('Boiling water');
  }

  pourInCup(): void {
    console.log('Pouring into cup');
  }

  async customerWantsCondiments() {
    return true;
  }
}
