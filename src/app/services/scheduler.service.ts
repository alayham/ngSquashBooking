import { Injectable } from '@angular/core';
import { ITimeSlot } from "app/services/ITimeSlot";

const DEFAULT_DURATION = 60;  // The duration of the reservation, in minutes. default is 45.
const START_TIME = 10; //The start hour of reservation, default is 10.
const END_TIME = 22; //the end hour of reservations, default is 22.
const BACKWORD_DAYS = 14; //how many days to go backword in the calendar. default is 0.
const FORWARD_DAYS = 14; // how many days to go forward in the calendar. default is 14.

const DAY_IN_MILLISECONDS =  24 * 60 * 60 * 1000; // the number of milliseconds in a day. DO NOT EDIT.
const BACKWORD_DURATION = BACKWORD_DAYS * DAY_IN_MILLISECONDS;
const FORWARD_DURATION = FORWARD_DAYS * DAY_IN_MILLISECONDS;
const SLOT_DURATION = DEFAULT_DURATION * 60 * 1000;
const SLOTS_PER_DAY = Math.floor(60 * (END_TIME - START_TIME) / DEFAULT_DURATION);
const TOTAL_DAYS =  BACKWORD_DAYS + 1 + FORWARD_DAYS;
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
   * 
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
   * 
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

  getSlotsOfDay(day: Date = new Date()):ITimeSlot[]{
    let daySlots:ITimeSlot[]=[];
    for(let slot of this.timeSlots){
      if(this.isSameDay(day,slot.startDate)){
        daySlots.push(slot);
      }
    }
    return(daySlots);
  }

  getSlotByTime(date:Date):ITimeSlot{
    for(let slot of this.timeSlots){
      if(slot.startDate <= date && slot.endDate > date){
        return slot;
      }
    }
    return null;
  }

  getUpcomingSlotsOfDay(day:Date):ITimeSlot{
    //Might need this as well.
    return
  }

  getForwardDays():Date[]{
    let today=new Date();
    let forwardDays:Date[] = [today];
    for(let i = 1; i <FORWARD_DAYS; i++){
      forwardDays.push(new Date(today.valueOf() + i * DAY_IN_MILLISECONDS));
    }
    return forwardDays;
  }

  getSlotofTableCell(date: Date, slotTime:ITimeSlot){

    //New logic, Huge performance gain, but might be buggy.
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
  isSameDay(date1: Date, date2:Date): boolean{
    return date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()
  }
  isSameTime(date1:Date, date2:Date){
    return date1.getHours() == date2.getHours() && date1.getMinutes() == date2.getMinutes() && date1.getSeconds() ==date2.getSeconds();
  }

  getStartTimeOfDay(date:Date):Date{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), START_TIME, 0,0,0 );
  }

  getEndTimeOfDay(date:Date):Date{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), END_TIME, 0,0,0 );
  }
}
