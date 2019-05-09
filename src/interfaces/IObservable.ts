import { IObserver } from './IObserver';

export interface IObservable<T> {
  next(newValue: T): void;
  subscribe(callback: IObserver<T>): void;
  unsubscribe(callback: IObserver<T>): void;
}
