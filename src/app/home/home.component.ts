import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authservice: AuthService) { }
  loadServer() {
    this.router.navigate(['/servers'], { queryParams: { per_page: 1 } })
  }
  onLogIn() {
    this.authservice.isLoggedIn = true
  }
  onLogOut() {
    this.authservice.isLoggedIn = false
  }
}
