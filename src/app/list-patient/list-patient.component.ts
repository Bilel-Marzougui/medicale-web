import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
listPatients : any= [] ;
name: string;
mail: string;
dateNais: string;
dateRend: string;
genre:String;

  constructor() { }

  ngOnInit(): void {
     var patients = localStorage.getItem("patients")
     this.listPatients =  JSON.parse(JSON.stringify(patients))
      this.name= JSON.parse(this.listPatients).name;
      this.mail =  JSON.parse(this.listPatients).email;
      this.dateNais =  JSON.parse(this.listPatients).datNaiss;
      this.dateRend =  JSON.parse(this.listPatients).dateRendezVous;
      this.genre =  JSON.parse(this.listPatients).genre
     
     
  }

}
