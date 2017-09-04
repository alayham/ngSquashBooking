import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { UserService } from "app/services/user-service.service";
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";

@Component({
  selector: 'app-reserve-dialog',
  templateUrl: './reserve-dialog.component.html',
  styleUrls: ['./reserve-dialog.component.css']
})
export class ReserveDialogComponent implements OnInit {

  constructor(private userService: UserService, private reservationsService: ReservationsService, 
    public dialogRef: MdDialogRef<ReserveDialogComponent>, 
    @Inject(MD_DIALOG_DATA) public data: any = {}) { 

  }

  ngOnInit() {
    console.log(this.data.court.courtReservations.length);
  }

  reserve(){
    let reservation: IReservation = {
      user: this.userService.user,
      court: this.data.court,
      timeSlot: this.data.slot,
    };
    console.log(reservation);
    this.reservationsService.reserve(reservation);
    console.log(this.data.court.courtReservations.length);
    this.dialogRef.close(reservation);
  }
}
