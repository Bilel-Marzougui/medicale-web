import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginmedecinServiceService {

  loginmedecin={
    email:'',
    id:''
  }
  IsLoggedIn:boolean=false
  

  constructor( private http:HttpClient) { }
  post(medecin:any){
    return this.http.post('http://localhost:5000/medecin/login',medecin)
  }
 

  savemedecinlogin(email:any,id:any){
    localStorage.setItem('token','token')
    localStorage.setItem('email',email)
    localStorage.setItem('id',id)
    this.IsLoggedIn=true
  }
}

