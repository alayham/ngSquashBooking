import { Injectable } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialogComponent } from "app/ui/login-dialog/login-dialog.component";
import { ReserveDialogComponent } from "app/ui/reserve-dialog/reserve-dialog.component";
import { UnreserveDialogComponent } from "app/ui/unreserve-dialog/unreserve-dialog.component";
import { UserService } from "app/services/user-service.service";
import { ITimeSlot } from "app/services/ITimeSlot";
import { ICourt } from "app/services/ICourt";
import { IReservation } from "app/services/IReservation";

@Injectable()
export class DialogsService {

  loginDialogRef: MdDialogRef<LoginDialogComponent>;
  reserveDialogRef: MdDialogRef<ReserveDialogComponent>;
  unreserveDialogRef: MdDialogRef<UnreserveDialogComponent>;

  constructor(public userService: UserService, public dialog: MdDialog) { }

  openLoginDialog() {
    this.loginDialogRef = this.dialog.open(LoginDialogComponent, {data: { userName: 'user1', userPassword: 'pass1' }});

    this.loginDialogRef.afterClosed().subscribe(result => {

    });
  }

  openReserveDialog(slot: ITimeSlot, court: ICourt) {
    this.reserveDialogRef = this.dialog.open(ReserveDialogComponent, {data: { slot: slot, court: court }});

    this.reserveDialogRef.afterClosed().subscribe(result => {

    });
  }

  openUnreserveDialog(reservation: IReservation) {
    this.unreserveDialogRef = this.dialog.open(UnreserveDialogComponent, { data: reservation });

    this.unreserveDialogRef.afterClosed().subscribe(result => {
 
    });
  }

}
