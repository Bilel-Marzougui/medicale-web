import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistermedecinServiceService {

  constructor(private http :HttpClient) { }
  getData(){
    return this.http.get('http://localhost:5000/medecin/',)
  }
  postData(medecin:any){
    return this.http.post('http://localhost:5000/medecin/',medecin)
  }
  putData(medecin:any,id:any){
    return this.http.put('http://localhost:5000/medecin/'+id,medecin)
  }
  deleteData(medecin:any,id:any){
    return this.http.delete('http://localhost:5000/medecin/'+id,medecin)
  }
}
