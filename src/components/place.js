import * as Parse from "parse";
// Maybe in the future, for a lighter weight self-hostable database we utilize indexeddb (with dexie)

export default class Place extends Parse.Object {

  constructor(name, createdBy) {
    // Pass the Class Name to the Parse.Object constructor
    super("Place")

    // All Other Initializations
    // Have to use .set here because otherwise the server will not recognize it for some reason
    this.set("name", name)            // Name of place
    this.set("createdBy", createdBy)  // This needs to be a Parse pointer to the User, so Parse.User.current()
  }
}
