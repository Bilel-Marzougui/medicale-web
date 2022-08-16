import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-prisedesrendez-vous',
  templateUrl: './prisedesrendez-vous.component.html',
  styleUrls: ['./prisedesrendez-vous.component.css']
})
export class PrisedesrendezVousComponent implements OnInit {

  constructor(   private snackBar:MatSnackBar, 

    ) { }

  ngOnInit()  {

  }
  //add (){
    
    // this.snackBar.open(" Veuillez ajouter la formule calculée dans le formulaire " ,"×", {

    //   duration: 5000,


    //   verticalPosition: 'top'

    // });

 
 add(p:any){
    let data=p.value
  console.log(data)
  }

}
