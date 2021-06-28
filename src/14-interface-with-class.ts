interface Greetable {
    name: string;
    greet(phrase: string): void;
}

class Person2 implements Greetable {
  name:string;

  constructor(name: string) {
      this.name = name;
  }

  // Interface function must be defined
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }

  // New functions are also appreciated
  greetFormat() {
      console.log('Some other logic');
  }
}

let obj = new Person2("Amir");