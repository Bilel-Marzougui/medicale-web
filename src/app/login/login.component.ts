import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  visible:boolean=true;
  changetype:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  add(f:any ){
    let data=f.value
    console.log(data)
  }
viewpass(){
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}

}
