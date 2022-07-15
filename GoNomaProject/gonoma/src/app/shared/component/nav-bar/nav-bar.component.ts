import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userLoged:boolean = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.router.events.subscribe(events => {
      console.log(events);
      if (events instanceof NavigationStart) {

        this.userLoged = this.auth.isUserLoggedIn();

        
      }
      

    })
  }

}
