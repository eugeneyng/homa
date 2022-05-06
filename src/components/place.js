import * as Parse from "parse";

export default class Place extends Parse.Object {

  constructor(name) {
    // Pass the Class Name to the Parse.Object constructor
    super("Place")

    // All Other Initializations
    this.name = name;
  }
}
