function extractAndConvert<T extends object,U extends keyof T>(obj: T, key: U) {
    return 'Value is ' + obj[key];
}

// console.log(extractAndConvert({}, 'name')); // ERROR: as there is no name property
console.log(extractAndConvert({name: 'Amir'}, "name"));