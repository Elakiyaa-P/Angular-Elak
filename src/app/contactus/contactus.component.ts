import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  image="https://go4customer.com/img/update-images/contact-us.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
