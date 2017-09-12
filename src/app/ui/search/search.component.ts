import { Component, OnInit } from '@angular/core';
import { SchedulerService } from "app/services/scheduler.service";
import { ClubService } from "app/services/club-service.service";
import { ITimeSlot } from "app/services/ITimeSlot";
import { NgForm, NgModel } from '@angular/forms';
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";
import { UserService } from "app/services/user-service.service";
import { DialogsService } from "app/services/dialogs/dialogs.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  now: Date = new Date();
  scheduleDay: Date ;
  _dateInput: number = this.now.valueOf();
  slotId: number = -1;

  get dateInput():number{
    return this._dateInput;
  }

  set dateInput(value: number){
    this._dateInput = +value;
    this.setDate( +value);
  }

  get timeslots():ITimeSlot[]{
    return this.schedulerService.getSlotsOfDay(this.scheduleDay).filter(item => item.startDate > this.now);
  }

  get slot():ITimeSlot{
    if(this.slotId>-1 && this.timeslots[this.slotId])
      return this.timeslots[this.slotId];
    else
      return null;
  }

  constructor(public userService:UserService, public schedulerService: SchedulerService, 
              public reservationsService: ReservationsService, public clubService: ClubService,
              public dialogsService: DialogsService) {
                
    this.scheduleDay = new Date(this._dateInput);
  }

  ngOnInit() {
  }

  setDate(dateValue:number){
    this.scheduleDay = new Date(dateValue);
    this.slotId = -1;
  }

}
