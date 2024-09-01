import { MenuItem } from '../MenuItem';

export class DinerMenuIterator implements Iterator<MenuItem> {
  items: any[];
  position: number = 0;

  constructor(items: any[]) {
    this.items = items;
  }
  return?(value?: any): IteratorResult<MenuItem, any> {
    throw new Error('Method not implemented.');
  }
  throw?(e?: any): IteratorResult<MenuItem, any> {
    throw new Error('Method not implemented.');
  }

  public next(): any {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  public hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }
}
