type ListNode<T> = {
    value: T;
    next: ListNode<T>;
}

export class LinkedList<T> {
    public head: ListNode<T> = null
    private tail: ListNode<T> = null
    private size: number = 0

    makeNode(value: T): ListNode<T> {
        return {
            value,
            next: null
        }
    }

    nodeByIndex(index: number): ListNode<T> {
        if (!this.head)
            return null

        if (index >= this.size)
            return null

        let curr = this.head
        let i = 0
        while (curr && i < index) {
            curr = curr.next
            i++
        }
        return curr
    }

    push(value: T): void {
        const newNode = this.makeNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }

        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }


    insert(index: number, value: T): void {
        if (!this.head || index >= this.size) {
            this.push(value)
            return
        }

        const newNode = this.makeNode(value)
        if (index === 0) {
            const n = this.head
            this.head = newNode
            newNode.next = n
            this.size++
            return
        }

        const prevNode = this.nodeByIndex(index - 1)
        const nextNode = prevNode.next
        newNode.next = nextNode
        prevNode.next = newNode
        this.size++
    }


    erase(index: number): void {
        if (this.size === 0)
            return

        if (index >= this.size)
            return

        if (index === 0) {
            const second = this.head.next
            this.head = second
            this.size--
            return
        }

        const prevNode = this.nodeByIndex(index - 1)
        const nextNode = prevNode.next.next
        prevNode.next = nextNode
        this.size--
    }

    getSize(): number {
        return this.size
    }

    isEmpty(): boolean {
        return this.head ? false : true
    }

    clear(): void {
        this.head = null
        this.size = 0
    }

    toArray(): T[] {
        const arr = []
        if (!this.head)
            return arr

        let curr = this.head;
        while (curr) {
            arr.push(curr.value)
            curr = curr.next;
        }
        return arr;
    }

    toString(): string {
        const output = this.toArray().join(",")
        return output
    }

}
