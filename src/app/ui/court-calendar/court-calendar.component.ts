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

  @Input() court:ICourt;

  constructor(public schedulerService: SchedulerService, public reservationService:ReservationsService) { 

  }

}
