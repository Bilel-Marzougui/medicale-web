import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent implements OnInit {

  constructor(private router : Router) { }
  listedesdocteurs:"/listedesdocteurs"
  ngOnInit(): void {

  }
  listeDoctor(val) :void{
    
    this.router.navigate(['/listedesdocteurs/'+val])
  }

}
