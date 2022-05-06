export default class Place {
  defaultRooms = ["Attic", "Bedroom", "Kitchen", "Living Room"];

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  permissions = [{ eugene: "rw" }, { morgan: "r" }];

  addRoom(room) {
    this.rooms.push(room);
  }
}
