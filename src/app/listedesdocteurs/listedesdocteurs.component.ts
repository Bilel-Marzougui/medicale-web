import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listedesdocteurs',
  templateUrl: './listedesdocteurs.component.html',
  styleUrls: ['./listedesdocteurs.component.css']
})
export class ListedesdocteursComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    go(){
      this.router.navigate(["prisedesrendez-vous"])
      
  }

}
