import { Component, Input } from '@angular/core';
import { ITimeSlot } from "app/services/ITimeSlot";

/**
 * 
 * 
 * @export
 * @class TimeslotComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent {

  @Input() slot: ITimeSlot;

  /**
   * Creates an instance of TimeslotComponent.
   * 
   * @memberOf TimeslotComponent
   */
  constructor() { }


}
