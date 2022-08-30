import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './components/activate/activate.component';
import { ActivationInProgComponent } from './components/activation-in-prog/activation-in-prog.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "subject/:id" , component : SubjectComponent},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "activate",component:ActivateComponent},
  {path : "activation",component:ActivationInProgComponent},
  {path : "dashbord",component:DashbordComponent, children: [
    {path : "users",component:DashUserComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
