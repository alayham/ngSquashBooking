import { Injectable } from '@angular/core';
import { IReservation } from "app/services/IReservation";
import { ClubService } from "app/services/club-service.service";
import { UserService } from "app/services/user-service.service";
import { SchedulerService } from "app/services/scheduler.service";
import { ICourt } from "app/services/ICourt";
import { ITimeSlot } from "app/services/ITimeSlot";
import { IUser } from "app/services/IUser";

const PROBABILITY_DENOMINATOR = 1.5; //use 4 for 25%, 5 for 20%, 2 for 50%, default is 4.
const DEFAULT_TIMESLOTS = 12; //Used when we need a specific number of timeslots in scheduling.

/**
 * The reservation Service. 
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
  constructor(public clubService: ClubService, public userService: UserService, public schedulerService: SchedulerService) { 
    //Generate a random number of random reservations for each court in each club.
    for(let club of clubService.clubList){
      for(let court of club.clubCourts){
        for(let slot of schedulerService.timeSlots){
          if( Math.floor(( Math.random() * PROBABILITY_DENOMINATOR )) == 0 ) { //Random condition
            //We are generating a random reservation
            let reservation: IReservation = {
              court: court,
              user: userService.userList[ Math.floor( Math.random() *  userService.userList.length )], //Random user 
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
   * Return a number of next timeslots. used in scheduling.
   * this should be moved to the scheduling service.
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
   * checks whether a timeslot is free for a court.
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
 
  /**
   * checks if the timeslot is reserved by a user
   * 
   * @param {ITimeSlot} slot 
   * @param {ICourt} court 
   * @param {IUser} user 
   * @returns 
   * 
   * @memberOf ReservationsService
   */
  isReservedByUser(slot: ITimeSlot, court: ICourt, user: IUser){
    if(!user && this.userService.user) 
      user=this.userService.user; //if no user is provided, get the current user
    for(let reservation of court.courtReservations){
      if(reservation.timeSlot == slot ){
        return (reservation.user == user);
      }
    }
    return false;
  }

  /**
   * checks whether a slot is reserved for a court.
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
   * checks whether a court has availability for the upcoming number of slots
   * This should be moved to the scheduling service
   * 
   * @param {ICourt} court 
   * @returns 
   * 
   * @memberOf ReservationsService
   */
  hasAvailability(court: ICourt)  {
    //the default number of upcoming slots is DEFAULT_TIMESLOTS
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
   * Make a new reservation.
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
   * delete a reservation.
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
