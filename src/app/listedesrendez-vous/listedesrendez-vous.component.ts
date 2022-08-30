import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExpComponent } from '../dialog-exp/dialog-exp.component';

@Component({
  selector: 'app-listedesrendez-vous',
  templateUrl: './listedesrendez-vous.component.html',
  styleUrls: ['./listedesrendez-vous.component.css']
})
export class ListedesrendezVousComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
addPatient(){
  var existingPatient = JSON.parse(localStorage.getItem("listePatient"));
    if(existingPatient == null) existingPatient = [];
    var name = document.getElementById("name").innerHTML;
    var email = document.getElementById("email").innerHTML;
    var datNaiss = document.getElementById("date").innerHTML;
    var genre= document.getElementById("genre").innerHTML;
    var dateRendezVous= document.getElementById("rendez").innerHTML;
    var patient = {
        "name": name,
        "email": email,
        "datNaiss":datNaiss,
        "genre":genre,
        "dateRendezVous":dateRendezVous

    };
    existingPatient.push(patient);
    localStorage.setItem("patients", JSON.stringify(patient));
    
}
  
}
