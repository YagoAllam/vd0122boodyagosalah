import { Component, OnInit } from '@angular/core';
import { Photo } from '../Class/photo';
import { IPhoto } from '../Interface/photo';
import { PhotoInterceptor } from '../photo.interceptor';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-gestor-photo',
  templateUrl: './gestor-photo.component.html',
  styleUrls: ['./gestor-photo.component.css']
})
export class GestorPhotoComponent implements OnInit {

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.catchPhoto()
    this.contaLike()
    
  }
  
  photos:IPhoto[] = [];
  
  catchPhoto(){
    this.photoService.getPhotos().subscribe((res) => {
      console.log(res)
      this.photos = res.splice(0,10);


    })
  }

  conta = 0

  contaLike(){
    this.conta = this.conta++
    console.log(this.conta)

  }

}
