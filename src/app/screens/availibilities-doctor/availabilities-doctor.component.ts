import { Component, OnInit } from '@angular/core';
import {Availability} from "../../models/Availability";
import {AbstractRestService} from "../../services/genericservice";
import {environment} from "../../../environments/environment";
import {SecureStorageService} from "../../services/secure-storage.service";

@Component({
  selector: 'app-availabilities-doctor',
  templateUrl: './availabilities-doctor.component.html',
  styleUrls: ['./availabilities-doctor.component.css']
})
export class AvailabilitiesDoctorComponent implements OnInit  {
    private path = `${environment.url}/availabilities`;
    availabilities !: Availability[];
    constructor(protected service: AbstractRestService<Availability>,
              protected secureStorageService: SecureStorageService) {
  }

  ngOnInit(): void {
    this.availabilities = [
        {
            id: 1,
            dateTime: new Date('2014-02-04 10:30:25')
        },
        {
            id: 1,
            dateTime: new Date('2014-02-04 11:30:25')
        },
        {
            id: 1,
            dateTime: new Date('2014-02-04 12:30:14')
        },
        {
            id: 1,
            dateTime: new Date('2014-02-04 12:30:25')
        }
    ]
  }
}
