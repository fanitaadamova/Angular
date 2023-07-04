import { Injectable } from '@angular/core';
import { User } from "./types/JSONplaceholderUser";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  users: User[] = [];

  // setInterval от 3 сек, на който да се добавя user
  constructor(private http: HttpClient) {
    // setInterval(() => {
    //   this.users.push({ name: 'demoName', age: 0 })
    //   console.log('User has been added!');
    //
    // }, 3000)
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {

    //  const user = {
    //    name: inputName.value,
    //    age: Number(inputAge.value)
    //  };
    //
    //  //насила тригърваме, като сменяме референцията
    // this.users = [...this.users, user]
    //
    inputName.value = "";
    inputAge.value = "";
  }

  getUsers() {
    //PROMISE
    //return fetch('https://jsonplaceholder.typicode.com/users')
    //  .then((res) => res.json()
    //  )

    //Observable
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  };

}
