interface CheckUser {
    name: string;
    age: number;
    gender?: string;   // optional parameter i.e. ?:
}

let userNew:CheckUser;

userNew = {
    name: "Nasir",
    age: 23
}
