import { Component, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UserService } from "app/services/user-service.service";
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";

/**
 * 
 * 
 * @export
 * @class ReserveDialogComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {

  /**
   * Creates an instance of ReserveDialogComponent.
   * @param {UserService} userService 
   * @param {ReservationsService} reservationsService 
   * @param {MdDialogRef<ReserveDialogComponent>} dialogRef 
   * @param {*} [data={}] 
   * 
   * @memberOf ReserveDialogComponent
   */
  constructor(public userService: UserService, public reservationsService: ReservationsService, 
    public dialogRef: MdDialogRef<ReserveDialogComponent>, 
    @Inject(MD_DIALOG_DATA) public data: any = {}) { 

  }

  /**
   * 
   * 
   * 
   * @memberOf ReserveDialogComponent
   */
  reserve(){
    let reservation: IReservation = {
      user: this.userService.user,
      court: this.data.court,
      timeSlot: this.data.slot,
    };
    this.reservationsService.reserve(reservation);
    this.dialogRef.close(reservation);
  }
}
