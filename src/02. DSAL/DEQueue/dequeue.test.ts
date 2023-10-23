import { DeQueue } from "./dequeue.array.class";

export const simpleDeQueueTests = () => {
    const deQueue = new DeQueue()

    console.log("test empty", deQueue.isEmpty() === true)
    deQueue.enqueueFront(1)
    console.log("test not empty", deQueue.isEmpty() === false)
    console.log("test size", deQueue.size() === 1)
    console.log("test dequeueFront", deQueue.dequeueFront() === 1)


    deQueue.enqueueRear(2)
    console.log("test not empty", deQueue.isEmpty() === false)
    console.log("test size", deQueue.size() === 1)
    console.log("test dequeueFront", deQueue.dequeueFront() === 2)


    deQueue.enqueueFront(5)
    deQueue.enqueueFront(6)
    deQueue.enqueueRear(7)
    deQueue.enqueueRear(8)

    console.log("test dequeueFront", deQueue.toString() === "6,5,7,8")

    deQueue.dequeueRear()
    console.log("test dequeueFront", deQueue.toString() === "6,5,7")

    deQueue.dequeueFront()
    deQueue.dequeueFront()
    console.log("test dequeueFront", deQueue.toString() === "7")
    console.log("test not empty", deQueue.isEmpty() === false)
    console.log("test size", deQueue.size() === 1)

    deQueue.dequeueRear()
    console.log("test empty", deQueue.isEmpty() === true)
    console.log("test size", deQueue.size() === 0)



}