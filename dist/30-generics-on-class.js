"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return this.data;
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Amir");
textStorage.addItem("Nasir");
textStorage.addItem("Ronith");
textStorage.removeItem("Amir");
console.log(textStorage.getItem());
//# sourceMappingURL=30-generics-on-class.js.map