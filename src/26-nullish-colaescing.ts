// If this data comes from database or API and we are uncertain of some property
let newData3 = {
  name: "Arnold",
  age: 30,
  job: null
  // job: {title: 'body-buider', description: 'Actor, Body-builder, Politian'}
};
let myResult = newData3 ?? 'Default data'
