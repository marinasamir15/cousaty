import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {

   }
   setRegister(userData:object):Observable<any>{
     return this._HttpClient.post(`http://localhost`,userData)
   }
}
