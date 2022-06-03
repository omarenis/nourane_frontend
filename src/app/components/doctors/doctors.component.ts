import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from "../../models/Doctor";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  @Input() rows !: Doctor[];
  @Input()  typeUser !: string;
  @Input()  role !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
