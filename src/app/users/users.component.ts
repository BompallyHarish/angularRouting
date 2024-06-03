import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  onUsersClick() {
    this.router.navigate(['users'], { relativeTo: this.route })
  }
}
