
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Iposts } from '../interface';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-home-post',
  templateUrl: './home-post.component.html',
  styleUrls: ['./home-post.component.scss']
})
export class HomePostComponent implements OnInit {

  constructor(private Posts: ServicePostService, private auth:AuthService, private route:Router) { }
  posts:Iposts[]=[]

  visualizzaPosts(){
    this.Posts.getPosts().subscribe(res => {this.posts=res.reverse()})
    // setTimeout(this.Posts.getPosts().subscribe(res => {this.posts=res}),2000)
  }

  ngOnInit(): void {
    this.visualizzaPosts()
  }
  cancellaPost(id:number){
    Swal.fire({
      title: 'Sei sicuro di voler eliminare il post?',
      text: "Non potrai annullare l'operazione!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ti ho detto Elimina!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cancellaPost1(id)
        Swal.fire(
          'Cancellato!',
          'Il post è stato eliminato',
          'success'
        )
      }
    })
  }
  cancellaPost1(id:number){
     console.log(id);
    
     this.Posts.removePost(id).subscribe((res:Iposts) => {console.log(res);this.visualizzaPosts()})
    //  setTimeout(()=>this.visualizzaPosts(),2000)
      // this.visualizzaPosts()
      
  }
  
  
  slogga(){
    this.auth.logout()
    this.route.navigate(['/login'])
  }

}

