import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./screens/login/login.component";
import {SignupComponent} from "./screens/signup/signup.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {IndexComponent} from "./screens/index/index.component";

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {path: '', redirectTo: 'index', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},
            { path: 'index', component: IndexComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
