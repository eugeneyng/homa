import * as Parse from "parse";
// Maybe in the future, for a lighter weight self-hostable database we utilize indexeddb (with dexie)

export default class Room extends Parse.Object {

  constructor(name, Place) {
    // Pass the Class Name to the Parse.Object constructor
    super("Room")

    // All Other Initializations
    // Have to use .set here because otherwise the server will not recognize it for some reason
    this.set("name", name)            // Name of room
    this.set("Place", Place)  // This needs to be a Parse pointer to the Place
  }
}
