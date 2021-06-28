interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user: Person;

user = {
    name: "Amir",
    age: 28,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user.greet("Hi there, this is ");