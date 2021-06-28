// const d = ['Amir', 'Ronith'];
// Built-in Generics
const arr: Array <string> = []; // same as const arr: string [] = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Hola, data succeded.");
        } catch (e) {
            reject("Something went wrong " + e);
        }
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});