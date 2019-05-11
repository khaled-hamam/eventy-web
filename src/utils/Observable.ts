import { IObservable } from '../interfaces/IObservable';
import { IObserver } from '../interfaces/IObserver';

export class Observable<T> implements IObservable<T> {
  private subject: T | undefined;
  private observers: IObserver<T>[];

  constructor(defaultValue?: T) {
    this.subject = defaultValue || undefined;
    this.observers = [];
  }

  next(newValue: T): void {
    this.subject = newValue;
    this.notify(this.subject);
  }

  get value(): T | undefined {
    return this.subject;
  }

  subscribe(callback: IObserver<T>): void {
    this.observers.push(callback);
    callback(this.value);
  }
  unsubscribe(callback: IObserver<T>): void {
    this.observers = this.observers.filter(observer => observer !== callback);
  }

  private notify(newValue: T) {
    this.observers.forEach(observer => observer(newValue));
  }
}
