import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterpatientServiceService {

  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get('http://localhost:5000/patient/')
  }
  postData(patient:any){
    return this.http.post('http://localhost:5000/patient/',patient)
  }
  putData(patient:any,id:any){
    return this.http.put('http://localhost:5000/patient/'+id ,patient)
  }
  deleteData(patient:any, id:any){
    return this.http.delete('http://localhost:5000/patient/'+id ,patient)
  }
}
