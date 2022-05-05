export default class User {

  constructor(id, password) {
    this.id = id;
    this.password = password;
  }

  places = [
    {id: 1, name: "address 1"},
    {id: 2, name: "address 2"}
  ];

}