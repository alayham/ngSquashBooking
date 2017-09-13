import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user-service.service";
import { ReservationsService } from "app/services/reservations.service";
import { IReservation } from "app/services/IReservation";
import { DialogsService } from "app/services/dialogs/dialogs.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  now:Date = new Date();
  
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
          
  constructor(public userService: UserService, public reservationsService: ReservationsService, public dialogsService: DialogsService) { 

  }

  ngOnInit() {

  }
}
