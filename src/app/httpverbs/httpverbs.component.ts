import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './details';

@Component({
  selector: 'app-httpverbs',
  templateUrl: './httpverbs.component.html',
  styleUrls: ['./httpverbs.component.css']
})
export class HttpverbsComponent implements OnInit {
  
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {

    //Http Post
    // this.http.post(' http://dummy.restapiexample.com/api/v1/create',
    // {
    //   name:'test',
    //   salary:'123',
    //   age:'23'
    // })
    // .subscribe(
    //   res => { console.log(res); },
    //   err => { console.log("Error occured");}
    // );
    
    //Http Get using Observable Method
    // this.http.get<Details>('http://dummy.restapiexample.com/api/v1/employees')
    // .subscribe(data=>{
    //   console.log("Emp Name:",+data.employee_name);
    //   console.log("Emp Salary:",+data.employee_salary);
    // },
    // err =>{
    //   console.log("Error has occured");
    // }
    // );

    //Http Put
    //Step 1: Insert the object using Post Method
    //Step 2: Then do the update using Put Method

    //Http Delete
    //this.http.delete('http://dummy.restapiexample.com/api/v1/employees')
    // .subscribe(
    //   res => { console.log(res); },
    //   err => { console.log("Error occured");}
    // );
  }

}
