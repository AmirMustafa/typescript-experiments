// If this data comes from database or API and we are uncertain of some property
let newData = {
    name: "Arnold",
    age: 30,
    job: {title: 'body-buider', description: 'Actor, Body-builder, Politian'}
};

let result2 = newData?.job?.title; 


