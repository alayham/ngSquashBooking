import { Injectable } from '@angular/core';
import { ITimeSlot } from "app/services/ITimeSlot";

const DEFAULT_DURATION = 45;  // The duration of the reservation, in minutes. default is 45.
const START_TIME = 10; //The start hour of reservation, default is 10.
const END_TIME = 22; //the end hour of reservations, default is 22.
const BACKWORD_DAYS = 14; //how many days to go backword in the calendar. default is 14.
const FORWARD_DAYS = 14; // how many days to go forward in the calendar. default is 14.

const DAY_IN_MILLISECONDS =  24 * 60 * 60 * 1000; // the number of milliseconds in a day. DO NOT EDIT.
const BACKWORD_DURATION = BACKWORD_DAYS * DAY_IN_MILLISECONDS; //the number of milliseconds to store backward in time
const FORWARD_DURATION = FORWARD_DAYS * DAY_IN_MILLISECONDS; //the number of milliseconds to store forward in time
const SLOT_DURATION = DEFAULT_DURATION * 60 * 1000; //the slot duration in milliseconds
const SLOTS_PER_DAY = Math.floor(60 * (END_TIME - START_TIME) / DEFAULT_DURATION); //The number of slots per day.
const TOTAL_DAYS =  BACKWORD_DAYS + 1 + FORWARD_DAYS; //the total number of days.
/**
 * 
 * 
 * @export
 * @class SchedulerService
 */
@Injectable()
export class SchedulerService {
  
  timeSlots: ITimeSlot[] = [];

  now:Date = new Date();

  startDate:Date = new Date(this.now.valueOf() - BACKWORD_DURATION);
  endDate:Date =  new Date(this.now.valueOf() + FORWARD_DURATION);

  /**
   * Creates an instance of SchedulerService.
   * 
   * @memberOf SchedulerService
   */
  constructor() { 
    this.buildAllSlots();
  }

  /**
   * Build the slots of a specific day.
   * 
   * @param {number} [milliseconds=new Date().valueOf()] 
   * 
   * @memberOf SchedulerService
   */
  buildSlotsOfDay(milliseconds: number = new Date().valueOf()){
    let date = new Date(milliseconds);
    let startTime: number = this.getStartTimeOfDay(date).valueOf();
    let endTime: number = this.getEndTimeOfDay(date).valueOf();
    let tmpTime = startTime ;

    while(tmpTime < endTime){
      this.timeSlots.push({
        startDate: new Date(tmpTime),
        endDate: new Date(tmpTime + SLOT_DURATION),
      });
      tmpTime += SLOT_DURATION;
    }
  }

  /**
   * Build all timeslots in all scheduling days.
   * 
   * 
   * @memberOf SchedulerService
   */
  buildAllSlots(){
    let tmpDuration:number = this.startDate.valueOf();
    while(tmpDuration < this.endDate.valueOf()){
      this.buildSlotsOfDay(tmpDuration);
      tmpDuration += DAY_IN_MILLISECONDS;
    }    
  }

  /**
   * Return the slots of a specific day
   * 
   * @param {Date} [day=new Date()] 
   * @returns {ITimeSlot[]} 
   * 
   * @memberOf SchedulerService
   */
  getSlotsOfDay(day: Date = new Date()):ITimeSlot[]{
    let daySlots:ITimeSlot[]=[];
    for(let slot of this.timeSlots){
      if(this.isSameDay(day,slot.startDate)){
        daySlots.push(slot);
      }
    }
    return(daySlots);
  }

  /**
   * Get the slot of a specific point in time
   * 
   * @param {Date} date 
   * @returns {ITimeSlot} 
   * 
   * @memberOf SchedulerService
   */
  getSlotByTime(date:Date):ITimeSlot{
    for(let slot of this.timeSlots){
      if(slot.startDate <= date && slot.endDate > date){
        return slot;
      }
    }
    return null;
  }


  /**
   * return an array of the upcoming days.
   * 
   * @param {Date} [today=new Date()] 
   * @returns {Date[]} 
   * 
   * @memberOf SchedulerService
   */
  getForwardDays(today:Date = new Date()):Date[]{
    let forwardDays:Date[] = [today];
    for(let i = 1; i <FORWARD_DAYS; i++){
      forwardDays.push(new Date(today.valueOf() + i * DAY_IN_MILLISECONDS));
    }
    return forwardDays;
  }

  /**
   * return the timeslot of a scheduling cell 
   * 
   * @param {Date} date 
   * @param {ITimeSlot} slotTime 
   * @returns 
   * 
   * @memberOf SchedulerService
   */
  getSlotofTableCell(date: Date, slotTime:ITimeSlot){

    //New logic, Huge performance gain, but might be buggy.
    //Guessing the index of the slot in the slots array.
    let dayIndex:number = Math.floor( (date.valueOf() - this.startDate.valueOf()) / DAY_IN_MILLISECONDS );
    let timeIndex:number = Math.floor((slotTime.startDate.valueOf() - this.getStartTimeOfDay(slotTime.startDate).valueOf()) / SLOT_DURATION );
    let slotIndex = dayIndex * SLOTS_PER_DAY + timeIndex;
    if(this.timeSlots[slotIndex]){
      return this.timeSlots[slotIndex];
    }else{
      return null;
    }



    //Original logic, guaranteed to work.
    /*
    for(let slot of this.timeSlots){
      if( this.isSameDay(date,slot.startDate)  && this.isSameTime(slotTime.startDate, slot.startDate)){
        return slot;
      }
    }
    console.log(date,slotTime);
    return(null);
    */
  }
  /**
   * Utility: check if two dates are in the same day
   * 
   * @param {Date} date1 
   * @param {Date} date2 
   * @returns {boolean} 
   * 
   * @memberOf SchedulerService
   */
  isSameDay(date1: Date, date2:Date): boolean{
    return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()
  }
  /**
   * Utility: ckeck if two dates have the same time of day
   * 
   * @param {Date} date1 
   * @param {Date} date2 
   * @returns 
   * 
   * @memberOf SchedulerService
   */
  isSameTime(date1:Date, date2:Date){
    return date1.getHours() == date2.getHours() && date1.getMinutes() == date2.getMinutes() && date1.getSeconds() ==date2.getSeconds();
  }

  /**
   * get the sceduling start time of a day.
   * 
   * @param {Date} date 
   * @returns {Date} 
   * 
   * @memberOf SchedulerService
   */
  getStartTimeOfDay(date:Date):Date{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), START_TIME, 0,0,0 );
  }

  /**
   * get the sceduling end time of a day.
   * 
   * @param {Date} date 
   * @returns {Date} 
   * 
   * @memberOf SchedulerService
   */
  getEndTimeOfDay(date:Date):Date{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), END_TIME, 0,0,0 );
  }


}
