import { DEQueue } from "./interface.dequeue";


export class DeQueue<T> implements DEQueue<T>{
    private items: T[] = [];

    enqueueFront(item: T): void {
        this.items.unshift(item)
    }

    enqueueRear(item: T): void {
        this.items.push(item)
    }

    dequeueFront(): T {
        return this.items.shift() || null
    }

    dequeueRear(): T {
        return this.items.pop() || null
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }

    toString(): string {
        return this.items.join(',')
    }

}