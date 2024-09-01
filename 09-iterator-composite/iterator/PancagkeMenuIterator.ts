import { MenuItem } from '../MenuItem';

export class PancakeMenuIterator implements Iterable<MenuItem> {
  items: any[];
  position: number = 0;

  constructor(items: any[]) {
    this.items = items;
  }
  [Symbol.iterator](): Iterator<MenuItem, any, any> {
    throw new Error('Method not implemented.');
  }

  public next(): any {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  public hasNext(): boolean {
    if (this.position >= this.items.length) {
      return false;
    }
    return true;
  }
}
