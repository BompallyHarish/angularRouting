import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  serverName: string
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.serverName = params['name']
    })
  }
}
