import { Component, OnInit } from '@angular/core';
import {LoginpatientServiceService} from '../loginpatient-service.service';
import {LoginmedecinServiceService} from '../loginmedecin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  visible:boolean=true;
  changetype:boolean=true;
  typeLogin:any;
  selectedVal:String;
 
  
   email:any;
   id:any;

 
  constructor(private _patient:LoginpatientServiceService, private _medecin:LoginmedecinServiceService,private router: Router) { }

  ngOnInit(): void {
    this.postFromAPI();
    this.postFromAPI2();
  }
  add(f:any ){
    let data=f.value
    console.log(data)
    if(this.typeLogin ==1){
      this._medecin.post(data).subscribe((res)=>{
if(res){
  console.log("login medecin",res)
  this.email=res;
  this.id=res;
  this._medecin.savemedecinlogin(this.email,this.id);

  this.router.navigateByUrl('/listedesrendez-vous');
 
}
      })  
    }else{
      console.log("login patient")
      this._patient.post(data).subscribe((res)=>{
if(res){
  this.router.navigateByUrl('/specialites');
}
      })
    }
  }
viewpass(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}
postFromAPI(){
  this._patient.post(this._patient).subscribe((response) => {
    console.log('Response from API is',response)
  },(error)=>{
    console.log('Error is',error);
  }
  
  )
}
postFromAPI2(){
  this._medecin.post(this._medecin).subscribe((response) => {
    console.log('Response from API is',response)
  },(error)=>{
    console.log('Error is',error);
  }
  
  )
}

 
  leftClick(val:any){
  console.log(val)
 }
  rightClick(val:any){
    console.log(val)

 }
 onReset(val:any){
this.typeLogin=val
 }
onValChange(val:any){

}




}
