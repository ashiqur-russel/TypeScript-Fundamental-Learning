let greet: Function;
greet = () => {
    console.log("hello ")
}
greet();

const add = (a: number, b: number, c: number | string = 10): void => { //  default parameter put on last
    console.log(a + b);
    console.log(c)
}

add(5, 6, 20)

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7)