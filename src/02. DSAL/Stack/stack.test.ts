import { Stack } from "./stack.array.class";
//import { Stack } from "./stack.linked.list.class";

const stack = new Stack<number>();

export const simpleStackTests = () => {
    console.log("test empty", stack.isEmpty() === true)
    
    stack.push(1)
    console.log("test not empty", stack.isEmpty() === false)
    
    const n = stack.pop()
    console.log("test empty", stack.isEmpty() === true)
    console.log(`${n} is 1`, n === 1)

    stack.push(2)
    stack.push(3)
    stack.push(4)
    console.log("test stack", stack.toString() === "2,3,4")
    console.log("test top", stack.top() === 4)
    
    console.log("test pop", stack.pop() === 4)
    console.log("test pop", stack.pop() === 3)
    console.log("test pop", stack.pop() === 2)
    console.log("test pop", stack.pop() === null)
    console.log("test stack", stack.toString())
    
    stack.push(5)
    stack.push(6)
    console.log("test stack", stack.toString() === "5,6")
    console.log("test top", stack.top() === 6)
    console.log("is not empty", stack.isEmpty()===false)
    stack.clear()
    console.log("test empty", stack.isEmpty() === true)
}