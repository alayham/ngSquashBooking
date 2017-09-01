import { Injectable } from '@angular/core';
import { IReservation } from "app/services/IReservation";
import { ClubService } from "app/services/club-service.service";
import { UserService } from "app/services/user-service.service";
import { SchedulerService } from "app/services/scheduler.service";

const PROBABILITY_DENOMINATOR = 4; //use 4 for 25%, 5 for 20%, 2 for 50%, default is 4.

@Injectable()
export class ReservationsService {

  reservationList: IReservation[] = [];
  constructor(private clubService: ClubService, private userService: UserService, private schedulerService: SchedulerService) { 
    for(let club of clubService.clubList){
      for(let court of club.clubCourts){
        for(let slot of schedulerService.timeSlots){
          if( Math.floor(( Math.random() * PROBABILITY_DENOMINATOR )) == 0 ) {
            //We are generating a random reservation
            this.reservationList.push({
              court: court,
              user: userService.userList[ Math.floor( Math.random() *  userService.userList.length )],
              timeSlot: slot,
            })
          }
        }
      }
    }
  }




}
