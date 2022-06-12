import { Component, OnInit } from '@angular/core';
import { ProfiloClass } from './profilo';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() {}

  movieInput:string = '';
  
  arrayMovie:ProfiloClass[]= []
  
  ngOnInit(): void {
  }
  
  addMovies():void {

  let newMovie = new ProfiloClass(this.movieInput); 
    
   this.arrayMovie.push(newMovie)
  
  }



}
