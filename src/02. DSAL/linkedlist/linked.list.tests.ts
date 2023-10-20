import { LinkedList } from './linked.list.class'


export function linkedListSimpleTests() {
    const ll = new LinkedList<number>()

    console.log("test size empty", ll.getSize() === 0)

    ll.push(2)
    ll.push(5)
    ll.push(4)
    console.log("test", ll.print() === "2,5,4")
    console.log("test size", ll.getSize() === 3)

    ll.insert(1, 1000)
    console.log("test", ll.print() === "2,1000,5,4")
    console.log("test size", ll.getSize() === 4)

    ll.insert(15, 2000)
    console.log("test", ll.print() === "2,1000,5,4,2000")
    console.log("test size", ll.getSize() === 5)

    console.log("nodeByIndex 0", ll.nodeByIndex(0).value === 2)
    console.log("nodeByIndex inner", ll.nodeByIndex(1).value === 1000)
    console.log("nodeByIndex end", ll.nodeByIndex(4).value === 2000)
    console.log("nodeByIndex out", ll.nodeByIndex(5) === null)

    ll.insert(0, 58999)
    console.log("test", ll.print() === "58999,2,1000,5,4,2000")
    console.log("test size", ll.getSize() === 6)
    
    ll.insert(0, 589990)
    console.log("test", ll.print() === "589990,58999,2,1000,5,4,2000")
    console.log("test size", ll.getSize() === 7)

    ll.erase(1)
    console.log("test", ll.print() === "589990,2,1000,5,4,2000")
    console.log("test size", ll.getSize() === 6)

    ll.erase(5)
    console.log("test", ll.print() === "589990,2,1000,5,4")
    console.log("test size", ll.getSize() === 5)

    ll.erase(0)
    console.log("test", ll.print() === "2,1000,5,4")
    console.log("test size", ll.getSize() === 4)

    ll.erase(3)
    console.log("test", ll.print() === "2,1000,5")
    console.log("test size", ll.getSize() === 3)


    ll.erase(30)
    console.log("test", ll.print() === "2,1000,5")
    console.log("test size", ll.getSize() === 3)

    ll.erase(3)
    console.log("test", ll.print() === "2,1000,5")
    console.log("test size", ll.getSize() === 3)

    ll.erase(2)
    console.log("test", ll.print() === "2,1000")
    console.log("test size", ll.getSize() === 2)

    ll.clear()
    console.log("test", ll.print() === "")
    console.log("test size", ll.getSize() === 0)


    console.log("nodeByIndex empty", ll.nodeByIndex(5) === null)
    console.log("nodeByIndex empty", ll.nodeByIndex(0) === null)

    ll.print()
}

