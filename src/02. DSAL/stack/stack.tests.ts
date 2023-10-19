import { Stack } from "./stack.class";

const stack = new Stack<number>();

export const simpleStackTests = () => {
    for (let a = 0; a < 10; a++) {
        stack.push(a);
        stack.log();
        console.log("top", stack.top());
    }

    stack.log();

    for (let a = 11; a > -1; a--) {
        console.log("pop", stack.pop());
        stack.log();
        console.log("top", stack.top());
    }

    stack.log();
    console.log("top", stack.top());

}

