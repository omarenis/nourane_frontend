import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../models/Doctor";

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent implements OnInit {
    doctors !: Doctor[];
  constructor() { }

  ngOnInit(): void {
      this.doctors = [
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: ''
          }
      ]
  }

}
