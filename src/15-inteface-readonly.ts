interface Greetable2 {
    readonly name: string;  // Read only
    greet(phrase: string): void;
}

class Person3 implements Greetable2 {
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

let obj3 = new Person3("Amir");
obj3.name = "user2";