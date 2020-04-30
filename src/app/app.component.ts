import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './user-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elite';
  results='';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void{

    //Http Post
    // this.http.post('http://jsonplaceholder.typicode.com/posts',
    // {
    //   title: 'foo',
    //   body: 'Fizz Buzz',
    //   userId: 5
    // })
    // .subscribe(
    //   res => { console.log(res); },
    //   err => { console.log("Error occured");}
    // );

    //Http Put
    // this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
    // {
    //   "name":"test1", 
    //   "salary":"5555",
    //   "age":"21"
    // })
    // .subscribe(
    //   res => { console.log(res); },
    //   err => { console.log("Error occured");}
    // );

    //Http get using two methods
    //Method 1: Promise method to use API (only for 1 subscriber)
    // this.http.get('http://dummy.restapiexample.com/api/v1/employees').toPromise()
    //   .then((data:any)=>{
    //     this.results=data.results;
    //     console.log(this.results);
    //   });
    
    //Method 2: Observable way of using API (both multiple and single subscriber)
    // this.http.get<UserResponse>('https://api.github.com/users/abdullah')
    // .subscribe(data=>{
    //   console.log("User Login:"+data.login);
    //   console.log("Bio:"+data.bio);
    //   console.log("Company:"+data.company);
    // },
    // err =>{
    //   console.log("Error has occured");
    // }
    // );
  }
}
