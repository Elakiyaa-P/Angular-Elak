import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Property for the gender
  gender: string[];
  // Property for the user
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.gender = ['Male','Female','Others'];
    // create a new user object
    this.user= new User({
      email: "", 
      password: { pwd: "", confirm_pwd: ""}, 
      gender: this.gender[0],
      terms: false
    });
  }

}
