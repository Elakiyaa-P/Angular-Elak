import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  todayString:string=new Date().toDateString();

  ngOnInit(): void {
  }

  products = [
    {"id":1, "name": "Milky Bar", "price":"170.00", "date":this.todayString, "quantity":58987 },
    {"id":2, "name": "Kit Kat", "price":"180.00", "date":this.todayString, "quantity":58977 },
    {"id":3, "name": "Dairy Milk", "price":"190.00", "date":this.todayString, "quantity":54987 },
    {"id":4, "name": "Kinder Joy", "price":"270.00", "date":this.todayString, "quantity":58287 },
    {"id":5, "name": "Tobleron", "price":"570.00", "mdate":this.todayString, "quantity":56987 }
  ];

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
