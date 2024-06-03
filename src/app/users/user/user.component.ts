import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) { }
  userId: { id: number, name: string }
  paramsSubscription: Subscription
  ngOnInit(): void {
    this.userId = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.userId.id = params['id']
      this.userId.name = params['name']
    })
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

}
