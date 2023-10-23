export interface IStack<T> {
    pop(): T;
    push(item: T): void;
    top(): T;
    isEmpty(): boolean;
    clear(): void;
}