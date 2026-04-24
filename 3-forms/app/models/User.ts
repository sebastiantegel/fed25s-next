export class User {
  firstname: string;
  lastname: string;
  email: string;
  favNumber: number;
  favColor: string;
  date: Date;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    favNumber: number,
    favColor: string,
    date: Date,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.favNumber = favNumber;
    this.favColor = favColor;
    this.date = date;
  }
}
