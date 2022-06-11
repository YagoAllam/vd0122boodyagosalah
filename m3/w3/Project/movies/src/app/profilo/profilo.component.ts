import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() {}

  movie:string = '';
  
  arrayMovie:[]= []
  
  ngOnInit(): void {
  }
  
  addMovies(event:any):void {

     let element = <HTMLInputElement>event.target

    
    this.movie = element.value
    
    
   this.arrayMovie.push()
  
  }



}
