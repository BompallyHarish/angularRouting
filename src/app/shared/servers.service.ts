import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  public Servers = [
    {
      id: 1,
      name: "Server1"
    },
    {
      id: 2,
      name: "Server2"
    },
    {
      id: 3,
      name: "Server3"
    },{
      id: 4,
      name: "Server4"
    }

  ]
}
