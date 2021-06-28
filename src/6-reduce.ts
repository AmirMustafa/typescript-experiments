const button = document.querySelector("button");
button?.addEventListener('click', (e:any) => console.log(e));


const person = {
    name: "amir",
    age: 28
};

const person2 = {
    ...person,
    gender: 'M'
};

console.log(person2);


const addFunction = (...num: number[]) => {
    return num.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

console.log(addFunction(5, 3, 5, 1.2));