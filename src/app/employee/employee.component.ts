import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { Observable } from 'rxjs';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public response:any;

  constructor(public service:EmpService) {
    this.service.getPosts().subscribe(
      result=>{
        this.response=result['data'];
        console.log(this.response);
      })
   }
   ngOnInit():void{}
}

