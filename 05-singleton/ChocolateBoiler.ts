export class ChocolateBoiler {
  private empty: boolean = true;
  private boiled: boolean = false;

  private static instance: ChocolateBoiler;

  private ChocolateBoiler() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!ChocolateBoiler.instance) {
      console.log('Creating unique instance of Chocolate Boiler...');
      ChocolateBoiler.instance = new ChocolateBoiler();
    }

    return ChocolateBoiler.instance;
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }

  public fill(): void {
    if (this.isEmpty()) {
      console.log('Filling the boiler with milk and chocolate...');

      this.empty = false;
      this.boiled = false;
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      console.log('Draining the boiled milk and chocolate...');

      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      console.log('Bringing the contents to a boil...');

      this.boiled = true;
    }
  }
}
