import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceNomad } from 'src/app/shared/model/interface-nomad';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authNomad:InterfaceNomad = {
    id:null,
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone:  "",
    place: "",
    
  }

  register(){
    this.signupService.signup(this.authNomad).subscribe(res => {
   console.log(res);
  }) 
  
  this.router.navigate(['/login'])
  }

}
