import { Component, OnInit } from '@angular/core';
import { AuthService, AuthData } from 'src/app/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user!:AuthData|null

  constructor(private navAuth:AuthService) { }

  // ngOnInit(): void {
  //   this.logged = this.navAuth.isUserLoggedIn()
  // }
  // logged:boolean=false;

  ngOnInit(): void {
    this.navAuth.loginObs.subscribe((res)=>{
      this.user = res;
      console.log();
      
    })
  }




}
