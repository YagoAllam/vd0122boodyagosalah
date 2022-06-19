import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ClassePrincipale } from '../classe-principale';
import { Iposts } from '../interface';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  constructor(private updatePost: ServicePostService, private aR: ActivatedRoute, private fB:FormBuilder) { }
  // updatePosts:Iposts[]=[]
  updatePosto:Iposts|undefined;
  idUpdate!:number;

  visualizzaPosts(id:number){
    console.log(id);
    
    this.idUpdate = id
    this.updatePost.getPost(this.idUpdate).subscribe(res=> console.log(res))
  }

  form!:FormGroup;

  ngOnInit(): void {
    console.log(this.form);
    
    this.aR.params.subscribe(
      async (parametri)=>{
        const id = +parametri["id"]
       
        this.updatePosto = await this.updatePost.getPost(id).toPromise()
        console.log(this.updatePosto);
        
        this.form=this.fB.group({

          title: [this.updatePosto?.title, [Validators.required]],
          body: this.fB.control(this.updatePosto?.body, [Validators.required])
        })
        this.form.statusChanges.subscribe(value=>console.log(value)
        )
        })

      
}
 
  loading= false
  aggiornaPost( ){
    //let x = new ClassePrincipale(post.userId, post.id, this.form.value.title, post.body)
    // this.updatePost.updatePost(x, id).subscribe((res:Iposts)=>{console.log(res);
    // })
    this.loading=true
    this.updatePost.updatePost(this.form.value, this.updatePosto!.id).subscribe((res:Iposts)=>{this.loading=false;
    
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'bravo ragazzo le tue modifiche sono andate a buon fine',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

}
