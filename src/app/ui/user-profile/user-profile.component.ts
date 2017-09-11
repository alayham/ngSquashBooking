import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user-service.service";
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";
import { MdDialog, MdDialogRef } from '@angular/material';
import { UnreserveDialogComponent } from "app/ui/unreserve-dialog/unreserve-dialog.component";
import { LoginDialogComponent } from "app/ui/login-dialog/login-dialog.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  now:Date = new Date();
  unreserveDialogRef: MdDialogRef<UnreserveDialogComponent>;
  loginDialogRef: MdDialogRef<LoginDialogComponent>;
  
  get upcomingReservations():IReservation[]{
    return this.reservationsService.reservationList.filter(res => res.user == this.userService.user && res.timeSlot.startDate > this.now)
            .sort((res1,res2):number => {
              if (res1.timeSlot.startDate <= res2.timeSlot.startDate)
                return -1;
              else
                return 1 ;
            });
  }

  get previousReservations():IReservation[]{
    return this.reservationsService.reservationList.filter(res => res.user == this.userService.user && res.timeSlot.startDate <= this.now)
            .sort((res1,res2):number => {
              if (res1.timeSlot.startDate <= res2.timeSlot.startDate)
                return 1;
              else
                return -1 
            });

  }
          
  constructor(public userService: UserService, public reservationsService: ReservationsService, public dialog: MdDialog) { 

  }

  ngOnInit() {

  }


  openUnreserveDialog(reservation: IReservation) {
    this.unreserveDialogRef = this.dialog.open(UnreserveDialogComponent, { data: reservation });

    this.unreserveDialogRef.afterClosed().subscribe(result => {
 
    });
  }
  
  openLoginDialog() {
    this.loginDialogRef = this.dialog.open(LoginDialogComponent, {data: { userName: 'user1', userPassword: 'pass1' }});

    this.loginDialogRef.afterClosed().subscribe(result => {

    });
  }


}
