import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './screens/login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {SignupComponent} from './screens/signup/signup.component';
import {MatRadioModule} from "@angular/material/radio";
import {OurDoctorsComponent} from './screens/our-doctors/our-doctors.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {IndexComponent} from './screens/index/index.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AvailabilitiesDoctorComponent } from './screens/availibilities-doctor/availabilities-doctor.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AdminUsersComponent } from './screens/admin-users/admin-users.component';
import { ProfileComponent } from './screens/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";


@NgModule({
    declarations: [AppComponent, AuthLayoutComponent, AdminLayoutComponent, SidebarComponent, LoginComponent,
        SignupComponent, OurDoctorsComponent, DoctorsComponent, IndexComponent, AvailabilitiesDoctorComponent,
        AdminUsersComponent, ProfileComponent, AvailabilitiesComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatButtonModule, MatRadioModule, ReactiveFormsModule,
        MatTooltipModule, MatLuxonDateModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
