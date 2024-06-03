import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  userId: { id: number, name: string }
  ngOnInit(): void {
    this.userId = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((params: Params) => {
      this.userId.id = params['id']
      this.userId.name = params['name']
    })
  }

}
