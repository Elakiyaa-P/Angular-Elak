import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private https:HttpClient) { }

  public getPosts():Observable<any[]>{
    return this.https.get<any[]>
      ('http://dummy.restapiexample.com/api/v1/employees');
  }
}

