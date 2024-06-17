import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription
  private subscription2: Subscription
  ngOnInit(): void {
  //   this.firstObsSubscription = interval(1000).subscribe(count => {
  //     console.log(count)
  //   })

  //   const customObservable = Observable.create(observer => {
  //     let count = 0
  //     setInterval(()=>{
  //       observer.next(count)
  //       if(count >3){
  //         observer.error('Greater than 3')
  //       }
  //       if(count ===5){
  //         observer.complete()
  //       }
  //       count++
  //     },1000)
      
  //   })
  //  this.subscription2= customObservable.subscribe(data=>{
  //     console.log('second observable ', data)
  //   },
  //   error =>{
  //     console.log(error.message)
  //   },
  //   ()=>{
  //     console.log('completed.')
  //   }
  // )
  }
  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe()
    // this.subscription2.unsubscribe()
  }
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
