import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from '../register.service';
import { IUser } from '../user';

@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.scss']
})
export class RegistraComponent implements OnInit {

  constructor(private regServ:RegisterService, private routes:Router) { }
  authUser:IUser = {
    email: '',
    nome: '',
    password: '',
    cognome: ''
  }
  ngOnInit(): void {
  }
  registrati(){
    this.regServ.register(this.authUser).subscribe(res=>{console.log(res);

    })
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.abc()
        
      }
      this.authUser = {
        email: '',
        nome: '',
        password: '',
        cognome: ''
      }
    })
  }
  abc(){
    this.routes.navigate(['/login'])
  }
  
}
