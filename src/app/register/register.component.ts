import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signin: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
//  showPassword=true;
 Categorie : string;
 CategorieChoices= [
  "",
  "Patient",
  "Medecin"
 ]
 public showPassword: boolean = false;
hidden :boolean = false;
  constructor() { }
 visibility(){
  this.showPassword=!this.showPassword;
 }
  ngOnInit(): void {
    console.log(this.Categorie);
    
  }
  add(f:any){
    let data=f.value
  console.log(data)
  }
  b(b:any){
    
  }
  // public togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }

 // showPassword = false;
//   showConfirmPassword = false;
//   show: boolean = false;
//   password() {
//     this.show = !this.show;
// }
//   public togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//   }


hide = true;
get passwordInput() { return this.signin.get('password'); }  
public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
}
