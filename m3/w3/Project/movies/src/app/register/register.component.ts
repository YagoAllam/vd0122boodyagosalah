import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IuserRegister } from './interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  authUser:IuserRegister = {
    email: '',
    username: '',
    password: ''
  }

  register(){
    this.userService.registerUser(this.authUser).subscribe(res => {
      console.log(res);
    })

  }


}
