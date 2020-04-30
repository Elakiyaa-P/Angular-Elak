import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  image="https://image.freepik.com/free-vector/about-us-landing-page-design_23-2148129057.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
