// type AddFn = (a: number, b: number) => number;  // Can also be achieved by type

interface AddFn {       // Alternative is interface
    (a:number, b:number): number;
}

let add: AddFn;
add = (n:number, n2:number) => {
    return n+n2;
};

console.log(add(3, 2));