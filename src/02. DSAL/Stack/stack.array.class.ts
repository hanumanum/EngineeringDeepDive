import { IStack } from "./interface.stack";

export class Stack<T> implements IStack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T {
        return this.items.pop() || null;
    }

    top(): T {
        if(this.items.length === 0) 
            return null
        
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items = [];
    }

    toString(): string {
        return this.items.toString();
    }

}