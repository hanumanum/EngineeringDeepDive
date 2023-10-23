import { IStack } from "./interface.stack";
import { LinkedList } from "../linkedlist/linked.list.class";

export class Stack<T> implements IStack<T> {
    private itemsList: LinkedList<T> = null;

    constructor() {
        this.itemsList = new LinkedList<T>();
    }

    push(item: T): void {
        this.itemsList.push(item);
    }

    pop(): T {
        const size = this.itemsList.getSize();
        if(size===0)
            return null

        const tail = this.itemsList.nodeByIndex(size - 1);
        this.itemsList.erase(size-1)
        return tail?.value || null;
    }

    top(): T {
        const size = this.itemsList.getSize()
        if (size === 0)
            return null

        return this.itemsList.nodeByIndex(size - 1).value
    }

    isEmpty(): boolean {
        return this.itemsList.getSize() === 0;
    }

    clear(): void {
        this.itemsList.clear();
    }

    toString(): string {
        return this.itemsList.toString();
    }

}