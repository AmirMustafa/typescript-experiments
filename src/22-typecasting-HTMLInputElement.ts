// const userInputElement = <HTMLInputElement> document.getElementById("firstname");
const userInputElement = document.getElementById("firstname")! as HTMLInputElement ;

// const userInputElement = document.getElementById("firstname");
userInputElement.value = "Hello there";
