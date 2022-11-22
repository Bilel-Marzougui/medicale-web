
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginpatientServiceService {

loginpatient={
  email:'',
  id:''
}
IsLoggedIn:boolean=false

constructor(private http : HttpClient) { }
  postData(patient:any){
    return this.http.post('http://localhost:5000/patient/login',patient)
  }
 //<-- constructor( private http:HttpClient) { }

 // post(patient:any){
    //return this.http.post('http://localhost:5000/patient/login',patient)
  //}
 
  //savepatientlogin(email:any,id:any){
    //localStorage.setItem('token','token')
    //localStorage.setItem('email',email)
    //localStorage.setItem('id',id)

    //this.IsLoggedIn=true
  //}
  
 
}
