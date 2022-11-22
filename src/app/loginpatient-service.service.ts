import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginpatientServiceService {

  constructor(private http : HttpClient) { }
  postData(patient:any){
    return this.http.post('http://localhost:5000/patient/login',patient)
  }
}
