import { Injectable } from '@angular/core';
import { IReservation } from "app/services/IReservation";
import { ClubService } from "app/services/club-service.service";
import { UserService } from "app/services/user-service.service";
import { SchedulerService } from "app/services/scheduler.service";
import { ICourt } from "app/services/ICourt";
import { ITimeSlot } from "app/services/ITimeSlot";
import { IUser } from "app/services/IUser";

const PROBABILITY_DENOMINATOR = 4; //use 4 for 25%, 5 for 20%, 2 for 50%, default is 4.
const DEFAULT_TIMESLOTS = 12;

/**
 * 
 * 
 * @export
 * @class ReservationsService
 */
@Injectable()
export class ReservationsService {

  reservationList: IReservation[] = [];

  /**
   * Creates an instance of ReservationsService.
   * @param {ClubService} clubService 
   * @param {UserService} userService 
   * @param {SchedulerService} schedulerService 
   * 
   * @memberOf ReservationsService
   */
  constructor(private clubService: ClubService, private userService: UserService, private schedulerService: SchedulerService) { 
    for(let club of clubService.clubList){
      for(let court of club.clubCourts){
        for(let slot of schedulerService.timeSlots){
          if( Math.floor(( Math.random() * PROBABILITY_DENOMINATOR )) == 0 ) {
            //We are generating a random reservation
            let reservation: IReservation = {
              court: court,
              user: userService.userList[ Math.floor( Math.random() *  userService.userList.length )],
              timeSlot: slot,
            }
            this.reservationList.push(reservation);
            court.courtReservations.push(reservation);
          }
        }
      }
    }
  }


  /**
   * 
   * 
   * @param {number} [total=DEFAULT_TIMESLOTS] 
   * @returns {ITimeSlot[]} 
   * 
   * @memberOf ReservationsService
   */
  getNextTimeSlots(total: number = DEFAULT_TIMESLOTS):ITimeSlot[] {
    let now:Date = new Date();
    
    for(let i=0; i<this.schedulerService.timeSlots.length;i++){
      if(this.schedulerService.timeSlots[i].startDate > now ){
        return(this.schedulerService.timeSlots.slice(i, i + total ));
      }
    }
  }

  /**
   * 
   * 
   * @param {ITimeSlot} slot 
   * @param {ICourt} court 
   * @returns {boolean} 
   * 
   * @memberOf ReservationsService
   */
  isFree(slot: ITimeSlot, court: ICourt):boolean {
    for(let reservation of court.courtReservations){
      if(reservation.timeSlot == slot ){
        return false;
      }
    }
    return true;
  }
 
  isReservedByUser(slot: ITimeSlot, court: ICourt, user: IUser){
    for(let reservation of court.courtReservations){
      if(reservation.timeSlot == slot ){
        return (reservation.user == user);
      }
    }
    return false;
  }

  /**
   * 
   * 
   * @param {ITimeSlot} slot 
   * @param {ICourt} court 
   * @returns {IReservation} 
   * 
   * @memberOf ReservationsService
   */
  getSlotReservationForCourt(slot: ITimeSlot, court: ICourt):IReservation{
    for(let reservation of court.courtReservations){
      if(reservation.timeSlot == slot ){
        return reservation;
      }
    }
    return null;
  }

  /**
   * 
   * 
   * @param {ICourt} court 
   * @returns 
   * 
   * @memberOf ReservationsService
   */
  hasAvailability(court: ICourt)  {

    for(let slot of this.getNextTimeSlots()){
      let freeslot:boolean = true;
      for(let reservation of court.courtReservations){
        if(reservation.timeSlot == slot){
          freeslot = false;
        }
        if(freeslot) return true;
      }
    }
    return false;
  }
    
  /**
   * 
   * 
   * @param {IReservation} reservation 
   * @returns {IReservation} 
   * 
   * @memberOf ReservationsService
   */
  reserve(reservation: IReservation): IReservation {
    this.reservationList.push(reservation);
    reservation.court.courtReservations.push(reservation);
    return reservation;
  }
  
  /**
   * 
   * 
   * @param {IReservation} reservation 
   * 
   * @memberOf ReservationsService
   */
  unreserve(reservation:IReservation){
    let index = this.reservationList.indexOf(reservation, 0);
    if (index > -1) {
      this.reservationList.splice(index, 1);
    } 
    index = reservation.court.courtReservations.indexOf(reservation, 0);
    if (index > -1) {
      reservation.court.courtReservations.splice(index, 1);
    } 

  }
    

}
