import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate() {
    let Role=localStorage.getItem("userType");
if(Role=="admin"){
    return true;
  }
  alert("you don't have admin rights")
  return false;
}
}
