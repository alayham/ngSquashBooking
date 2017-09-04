import { Component, OnInit, Input } from '@angular/core';
import { ITimeSlot } from "app/services/ITimeSlot";

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  @Input() slot: ITimeSlot;

  constructor() { }

  ngOnInit() {
  }

}
