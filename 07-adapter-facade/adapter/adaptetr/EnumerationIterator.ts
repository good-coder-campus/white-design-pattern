import { Enumeration } from '../entity/Enumeration';

export class EnumerationIterator implements Iterator<Object> {
  enumeration: Enumeration;
  constructor(enumeration: Enumeration) {
    this.enumeration = enumeration;
  }
  return?(value?: any): IteratorResult<Object, any> {
    throw new Error('Method not implemented.');
  }

  hasNext(): boolean {
    return this.enumeration.hasMoreElements();
  }

  next(): any {
    return this.enumeration.nextElement();
  }
  remove(): void {
    throw new Error('Unsupported operation');
  }
}
