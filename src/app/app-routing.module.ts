import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./screens/login/login.component";
import {SignupComponent} from "./screens/signup/signup.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
