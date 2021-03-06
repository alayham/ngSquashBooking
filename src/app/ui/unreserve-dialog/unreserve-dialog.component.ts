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
 * @class UnreserveDialogComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-unreserve-dialog',
  templateUrl: './unreserve-dialog.component.html',
  styleUrls: ['./unreserve-dialog.component.css']
})
export class UnreserveDialogComponent {

  /**
   * Creates an instance of UnreserveDialogComponent.
   * @param {UserService} userService 
   * @param {ReservationsService} reservationsService 
   * @param {MdDialogRef<UnreserveDialogComponent>} dialogRef 
   * @param {*} [data=null] 
   * 
   * @memberOf UnreserveDialogComponent
   */
  constructor(public userService: UserService, public reservationsService: ReservationsService, 
    public dialogRef: MdDialogRef<UnreserveDialogComponent>, 
    @Inject(MD_DIALOG_DATA) public data: any = null) { 

  }

  /**
   * 
   * 
   * 
   * @memberOf UnreserveDialogComponent
   */
  unreserve(){

    this.reservationsService.unreserve(this.data);
    this.dialogRef.close(this.data);
  }
}
