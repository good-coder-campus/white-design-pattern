export interface Iterator {
  hasNext(): boolean;
  next(): any;
  remove(): void;
}
