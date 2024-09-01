export abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  public remove(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation');
  }

  public getChild(i: number): MenuComponent {
    throw new Error('Unsupported operation');
  }

  public getName(): string {
    throw new Error('Unsupported operation');
  }

  public getDescription(): string {
    throw new Error('Unsupported operation');
  }

  public getPrice(): number {
    throw new Error('Unsupported operation');
  }

  public isVegetarian(): boolean {
    throw new Error('Unsupported operation');
  }

  public print(): void {
    throw new Error('Unsupported operation');
  }
}
