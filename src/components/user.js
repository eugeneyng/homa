export default class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  places = [
    { id: 1, name: "address 1" },
    { id: 2, name: "address 2" },
  ];
}
