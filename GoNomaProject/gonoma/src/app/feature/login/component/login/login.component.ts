import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authServ: AuthService, private router:Router) { }
  
  accedi:boolean=true

  authUser:any = {
    email: '',
    password: ''
  }

 
  ngOnInit(): void {
  }

  enter(){
    this.authServ.login(this.authUser).subscribe((res:any)=>{console.log(res);
      this.authServ.saveUser(res.accessToken); this.seiLoggato()
      if (!this.accedi) {
        this.router.navigate(['/dashboard']);
      }
    })
  }
  seiLoggato(){
      if(localStorage.getItem("token") != null){this.accedi=false}
  }
}
