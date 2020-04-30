import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartmentModule } from './department/department.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OddevenComponent } from './oddeven/oddeven.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { HttpverbsComponent } from './httpverbs/httpverbs.component';
import { PostComponent } from './post/post.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    OddevenComponent,
    ContactusComponent,
    AdminComponent,
    HttpverbsComponent,
    PostComponent,
    EmployeeComponent,
    StudentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
