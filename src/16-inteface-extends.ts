interface Named {
    name: string;
}

interface Greetable4 extends Named {
    greet(phrase: string): void;
}

class Person4 implements Greetable2 {
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

let obj4 = new Person4("Amir");