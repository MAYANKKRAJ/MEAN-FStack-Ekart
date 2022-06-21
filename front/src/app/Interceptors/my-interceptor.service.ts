import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    const token = window.localStorage.getItem('token');
    console.log("In Interceptor ",window.localStorage.getItem('token'));
    if(!token){
      console.log('Not Token');
      
      return next.handle(req);
    }

    console.log('Setting..................... Token');

    const req1 = req.clone({
      headers: req.headers.set('token', `${token}`),
    });
    
    return next.handle(req1);
  }
}
