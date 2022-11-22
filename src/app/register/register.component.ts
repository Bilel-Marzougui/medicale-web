import { Component, OnInit } from '@angular/core';
import { RegisterpatientServiceService } from '../registerpatient-service.service';
import {RegistermedecinServiceService} from '../registermedecin-service.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatSnackBar } from '@angular/material/snack-bar';
import{
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Router } from '@angular/router';
import { config, from } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true ;
 
  
showPassword = false;
showConfirmPassword = false;
 Categorie : string;
 CategorieChoices= [
  "",
  "Patient",
  "Medecin"
 ]
 message:any;
constructor (private router:Router ,private _patient : RegisterpatientServiceService ,private _medecin: RegistermedecinServiceService ) { }
opensweetalerte(){
 
  // this.snackBar.open(message ,"×", {
  //  duration: 50000,
  //  horizontalPosition:'center',
  //  verticalPosition:'top',
   


  // })
}
  ngOnInit(): void {

    console.log(this.Categorie);
    // this.getDataFromAPI();
    // this.putDataFromAPI(this._patient);
    // this.deleteDataFromAPI(this._patient);
  }
1
  add(f:any){
    console.log(this.Categorie,f.value)
    if (this.Categorie=="Patient"){
    let data=f.value
  console.log(data)
  this._patient.postData(data).subscribe((response) =>{
    console.log('Response from API is' ,response==null)
    if(response==null){
      console.log(1);
      this.opensweetalerte();{
        Swal.fire('','Le compte est déja existe!', 'error')
      }
      
      
      }
      else{
        console.log(2221)
        this.opensweetalerte();{
          Swal.fire('','Votre compte a été créé avec succés', 'success')
        }
      this.router.navigate(["login"])
          
      }
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
  }
  else 
  {
    let medecin=f.value
console.log(medecin)
this._medecin.postData(medecin).subscribe((response) =>{
  console.log('Response from API is' ,response==null)
  if(response==null){
    // console.log("here");
    this.opensweetalerte();{
      Swal.fire('','Le compte est déja existe', 'error')
    }
   
    
    }
    else{
      this.opensweetalerte();{
        Swal.fire('','Votre compte a été créé avec succés', 'success')
      }
      this.router.navigate(["login"]) 
    }
}, (error)=>{
  console.log('Error is' , error);
}
)

  }
}
  b(b:any){
    
  }
 
  public toggleShowPassword(show): void {
    this.showPassword = !this.showPassword;
  }
  public toggleShowConfirmedPassword(show): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
getDataPatient(){
  this._patient.getData().subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}

putDataPatient(f:any){
  let patient=f.value;
  let id=f.value;
  this._patient.putData(patient,id).subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}
deleteDataPatient(f:any){
  let patient=f.value;
  let id=f.value;
  this._patient.deleteData(patient,id).subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}
// addMedecin(f:any){
//   let medecin=f.value
// console.log(medecin)
// this._medecin.postData(medecin).subscribe((response) =>{
//   console.log('Response from API is' ,response)
// }, (error)=>{
//   console.log('Error is' , error);
// }
// )
// }
getDataMedecin(){
  this._medecin.getData().subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}
putDataMedecin(f:any){
  let medecin=f.value;
  let id=f.value;
  this._medecin.putData(medecin,id).subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}
deleteDataMedecin(f:any){
  let medecin=f.value;
  let id=f.value;
  this._medecin.deleteData(medecin,id).subscribe((response) =>{
    console.log('Response from API is' ,response)
  }, (error)=>{
    console.log('Error is' , error);
  }
  )
}
}
