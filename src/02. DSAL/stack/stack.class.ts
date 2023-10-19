interface IStack<T> {
    pop(): T;
    push(item: T): void;
    top(): T;
    empty(): boolean;
    clear(): void;
}

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

    empty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items = [];
    }

    log(): void {
        console.log(this.items);
    }

}