import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let UserToken = localStorage.getItem('token');

    if (UserToken != null){
      var newRequest = request.clone({

        headers: request.headers.append('authorization', 'Bearer ' + UserToken)
      })
    }
    else{
        var newRequest = request

    }


//  una middleware che gestiona la chiamata prima di mandarla avanti , quindi adesso faccio il handle della richiesta nuova (newRequest) 
    return next.handle(newRequest);
  }
}
