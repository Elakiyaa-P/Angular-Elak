import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private router: Router) { }

  public login(){
    // this.router.navigateByUrl('product');
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout(){
    // this.router.navigateByUrl('login');
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
