import { Enumeration } from '../entity/Enumeration';

export class IteratorEnumeration implements Enumeration {
  private iterator: Iterator<Object>;

  constructor(iterator: Iterator<Object>) {
    this.iterator = iterator;
  }
  hasMoreElements(): boolean {
    throw new Error('Method not implemented.');
  }

  // 타입스크립트에는 hasMoreElements() 메서드가 없음.
  // hasMoreElements(): boolean {
  //   return this.iterator.hasNext();
  // }

  nextElement(): any {
    return this.iterator.next();
  }
}
