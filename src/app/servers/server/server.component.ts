import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {
  public id: Number
  public serverName: string
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.serverName = params['name']
    })
  }

  onClick() {
    console.log(this.id, this.serverName)
    this.router.navigate(["/servers", this.id, this.serverName, 'edit'],)
  }
}
