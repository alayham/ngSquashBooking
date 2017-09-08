import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ITimeSlot } from "app/services/ITimeSlot";
import { ICourt } from "app/services/ICourt";
import { UnreserveDialogComponent } from "app/ui/unreserve-dialog/unreserve-dialog.component";
import { IReservation } from "app/services/IReservation";

/**
 * 
 * 
 * @export
 * @class UnreserveComponent
 */
@Component({
  selector: 'app-unreserve',
  templateUrl: './unreserve.component.html',
  styleUrls: ['./unreserve.component.css']
})
export class UnreserveComponent {

  dialogRef: MdDialogRef<UnreserveDialogComponent>;
  @Input() reservation: IReservation;

  /**
   * Creates an instance of UnreserveComponent.
   * @param {MdDialog} dialog 
   * 
   * @memberOf UnreserveComponent
   */
  constructor(public dialog: MdDialog) { 
    
  }

  /**
   * 
   * 
   * 
   * @memberOf UnreserveComponent
   */
  openUnreserveDialog() {
    this.dialogRef = this.dialog.open(UnreserveDialogComponent, { data: this.reservation });

    this.dialogRef.afterClosed().subscribe(result => {
 
    });
  }
}