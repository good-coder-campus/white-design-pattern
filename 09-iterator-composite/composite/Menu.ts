import { MenuComponent } from './MenuComponent';

export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = [];
  name: string;
  description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter(
      (component) => component !== menuComponent
    );
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): void {
    console.log(`\n${this.getName()}, ${this.getDescription()}`);
    console.log('---------------------');

    this.menuComponents.forEach((menuComponent) => {
      menuComponent.print();
    });
  }
}
