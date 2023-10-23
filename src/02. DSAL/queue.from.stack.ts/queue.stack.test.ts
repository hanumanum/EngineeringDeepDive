import { StackyQueue } from "./queue.stack.class";


export const testStackyQUeue = () => {
    const queue = new StackyQueue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    
    console.log(queue.dequeue() === 1)

    console.log(queue.dequeue() === 2)
    queue.enqueue(4)
    console.log(queue.dequeue() === 3)
    console.log(queue.dequeue() === 4)

    queue.enqueue(100)
    queue.enqueue(200)
    queue.enqueue(300)
    console.log(queue.dequeue() === 100)
    console.log(queue.dequeue() === 200)
    queue.enqueue(400)
    console.log(queue.dequeue() === 300)
    console.log(queue.dequeue() === 400)
    console.log(queue.dequeue() === null)




}  