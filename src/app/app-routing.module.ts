import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DialogExpComponent } from './dialog-exp/dialog-exp.component';
import { HomeComponent } from './home/home.component';
import { ListedesdocteursComponent } from './listedesdocteurs/listedesdocteurs.component';
import { ListedesrendezVousComponent } from './listedesrendez-vous/listedesrendez-vous.component';
import { LoginComponent } from './login/login.component';
import { PrisedesrendezVousComponent } from './prisedesrendez-vous/prisedesrendez-vous.component';
import { RegisterComponent } from './register/register.component';
import {SpecialitesComponent} from './specialites/specialites.component'
import { ListPatientComponent } from './list-patient/list-patient.component';
import{AuthGuard} from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listedesdocteurs/:spe',component:ListedesdocteursComponent},
  {path:'prisedesrendez-vous',component:PrisedesrendezVousComponent,canActivate:[AuthGuard]},
  {path:'listedesrendez-vous',component:ListedesrendezVousComponent,canActivate:[AuthGuard]},
  {path:'dialog-exp',component:DialogExpComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path :'list-patient',component:ListPatientComponent,canActivate:[AuthGuard]},
  {path:'specialites',component:SpecialitesComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
