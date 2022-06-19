import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authServ: AuthService, private router:Router) { }

  authUser:any = {
    email: '',
    password: ''
  }
  accedi:boolean=true
  ngOnInit(): void {
  }
  entra(){
    this.authServ.login(this.authUser).subscribe((res:any)=>{console.log(res);
      this.authServ.saveUser(res.accessToken); this.seiLoggato()
      if (!this.accedi) {
        this.router.navigate(['/home-post'])
      }
    })
  }
  seiLoggato(){
      if(localStorage.getItem("token") != null){this.accedi=false}
  }
}
