import * as Parse from "parse";
// Maybe in the future, for a lighter weight self-hostable database we utilize indexeddb (with dexie)

export default class Place extends Parse.Object {

  constructor(name) {
    // Pass the Class Name to the Parse.Object constructor
    super("Place")

    // All Other Initializations
    this.name = name;
  }
}
