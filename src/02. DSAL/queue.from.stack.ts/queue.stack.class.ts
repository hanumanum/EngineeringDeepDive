import { Stack } from "../stack/stack.class";


export class StackyQueue<T> {
    private stack1: Stack<T>
    private stack2: Stack<T>

    constructor() {
        this.stack1 = new Stack<T>()
        this.stack2 = new Stack<T>()
    }

    enqueue(value: T) {
        while(!this.stack2.empty()) {
            this.stack1.push(this.stack2.pop())
        }
        this.stack1.push(value)
    }

    dequeue(): T {
        while(!this.stack1.empty()) {
            this.stack2.push(this.stack1.pop())
        }
        
        const d = this.stack2.pop()
        return d 
    }
}