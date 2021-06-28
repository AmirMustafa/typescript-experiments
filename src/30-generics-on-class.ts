class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Amir");
textStorage.addItem("Nasir");
textStorage.addItem("Ronith");
textStorage.removeItem("Amir");

console.log(textStorage.getItem());
