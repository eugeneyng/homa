
export default class Place {

  constructor(id, ownerId, name) {
    this.id = id;
    this.ownerId = ownerId;
    this.name = name;
  }

  addRoom(room) {
    this.rooms.push(room)
  }

}
