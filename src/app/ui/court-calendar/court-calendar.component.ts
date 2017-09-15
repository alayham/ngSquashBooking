import { Component, Input } from '@angular/core';
import { ICourt } from "app/services/ICourt";
import { SchedulerService } from "app/services/scheduler.service";
import { ReservationsService } from "app/services/reservations.service";

/**
 * 
 * 
 * @export
 * @class CourtCalendarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-court-calendar',
  templateUrl: './court-calendar.component.html',
  styleUrls: ['./court-calendar.component.css']
})
export class CourtCalendarComponent {

  now: Date = new Date();  
  _dateInput: number = this.now.valueOf();
  scheduleDay:Date = this.now;
  forwardDays:Date[] = this.schedulerService.getForwardDays(this.now);
  @Input() court:ICourt;

  set dateInput(value: number){
    this._dateInput = +value;
    this.setDate( +value);
  }

  get dateInput():number{
    return this._dateInput;
  }
  constructor(public schedulerService: SchedulerService, public reservationService:ReservationsService) { 

  }

  setDate(dateValue:number){
    this.scheduleDay = new Date(dateValue);
  }  
}
