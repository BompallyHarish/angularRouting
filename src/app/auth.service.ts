import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false
  authenticate() {
    return this.isLoggedIn
  }

  logIn() {
    this.isLoggedIn = true
  }
  logOut() {
    this.isLoggedIn = false
  }
}
