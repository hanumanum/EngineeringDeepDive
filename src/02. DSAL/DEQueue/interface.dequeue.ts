export interface DEQueue<T> {
    enqueueFront(item:T):void
    enqueueRear(item:T):void
    dequeueFront():T
    dequeueRear():T
    isEmpty():boolean
    size():number 
}


/* enqueueFront(item): Adds an item to the front of the DEQUE. 
• enqueueRear(item): Adds an item to the rear of the DEQUE. 
• dequeueFront(): Removes and returns the item from the front of the DEQUE. 
• dequeueRear(): Removes and returns the item from the rear of the DEQUE. 
• isEmpty(): Returns True if the DEQUE is empty, False otherwise. 
• size(): Returns the number of elements in the DEQUE. */