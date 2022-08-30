import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrisedesrendezVousComponent } from './prisedesrendez-vous/prisedesrendez-vous.component';
import { ListedesrendezVousComponent} from './listedesrendez-vous/listedesrendez-vous.component';
import { ListedesdocteursComponent } from './listedesdocteurs/listedesdocteurs.component';
import { DialogExpComponent } from './dialog-exp/dialog-exp.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListPatientComponent } from './list-patient/list-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListedesdocteursComponent ,
    DialogExpComponent,
    ListedesrendezVousComponent,
    PrisedesrendezVousComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ListPatientComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule



  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
