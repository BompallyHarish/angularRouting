import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  public users = [
    {
      id: 1,
      name: "Harish"
    },
    {
      id: 2,
      name: "Vrinda"
    },
    {
      id: 3,
      name: "Sangeetha"
    },{
      id: 4,
      name: "Bhanu"
    }

  ]
}
