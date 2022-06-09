import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!: Subscription;
  
  ngOnInit(): void {
    
   this.sub = interval(1000).subscribe( numero => console.log(numero));

   const customInterval = new Observable( observer => {

    let count = 0;
    setInterval(() => {

      observer.next(count);

      count++;

      // observer.error();

      // observer.complete();


    }, 1000);
   })

   customInterval.subscribe(numero => console.log(numero))


    
  }
  
  
      ngOnDestroy(): void {
       this.sub.unsubscribe()
  
      }

}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

