import { Component, OnInit, Input } from '@angular/core';
import { ICourt } from "app/services/ICourt";
import { ITimeSlot } from "app/services/ITimeSlot";
import { UserService } from "app/services/user-service.service";
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";

/**
 * 
 * 
 * @export
 * @class ReservationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input() slot: ITimeSlot;
  @Input() court: ICourt;

  now: Date = new Date();
  /**
   * 
   * 
   * @readonly
   * @type {IReservation}
   * @memberOf ReservationComponent
   */
  get reservation(): IReservation{
    return this.reservationsService.getSlotReservationForCourt(this.slot,this.court);
  }


  /**
   * Creates an instance of ReservationComponent.
   * @param {UserService} userService 
   * @param {ReservationsService} reservationsService 
   * 
   * @memberOf ReservationComponent
   */
  constructor(public userService:UserService, public reservationsService: ReservationsService) { 

  }

  ngOnInit() {

  }
}
