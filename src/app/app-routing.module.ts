import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
// import { AdminComponent } from './admin/admin.component';
// import { OrderComponent } from './order/order.component';
// import {AuthGuard} from './auth.guard';
// import { HomeComponent } from './home/home.component';
// import { BlogComponent } from './blog/blog.component';
// import { AboutComponent } from './about/about.component';
// import { ProductComponent } from './product/product.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  // { path: 'order/:id', component : OrderComponent, canActivate: [AuthGuard]},
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', component : HomeComponent},
  // { path: 'blog', component : BlogComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'login'},
  // { path: 'login', component: LoginComponent},
  // { path: 'admin', component: AdminComponent}
  // { path: 'product', component: ProductComponent},
  // { path: 'about', component :AboutComponent},
  // { path: 'contactus', component: ContactusComponent}
  // {path:'**', component: NotfoundComponent}
    { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
