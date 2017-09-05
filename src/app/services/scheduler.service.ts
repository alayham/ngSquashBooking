import { Injectable } from '@angular/core';
import { ITimeSlot } from "app/services/ITimeSlot";

const DEFAULT_DURATION = 45;  // The duration of the reservation, in minutes. default is 45.
const START_TIME = 10; //The start hour of reservation, default is 10.
const END_TIME = 22; //the end hour of reservations, default is 22.
const BACKWORD_DAYS = 14; //how many days to go backword in the calendar. default is 14.
const FORWARD_DAYS = 14; // how many days to go forward in the calendar. default is 14.

const DAY_IN_MILLISECONDS =  24 * 60 * 60 * 1000; // the number of milliseconds in a day. DO NOT EDIT.


/**
 * 
 * 
 * @export
 * @class SchedulerService
 */
@Injectable()
export class SchedulerService {
  duration: number = DEFAULT_DURATION;
  
  timeSlots: ITimeSlot[] = [];
  /**
   * Creates an instance of SchedulerService.
   * 
   * @memberOf SchedulerService
   */
  constructor() { 
    this.getAllSlots();
  }

  /**
   * 
   * 
   * @param {number} [milliseconds=new Date().valueOf()] 
   * 
   * @memberOf SchedulerService
   */
  getSlotsOfDay(milliseconds: number = new Date().valueOf()){
    let date = new Date(milliseconds);
    let startTime: number = new Date(date.getFullYear(), date.getMonth(), date.getDate(), START_TIME, 0,0,0 ).valueOf();
    let endTime: number = new Date(date.getFullYear(), date.getMonth(), date.getDate(), END_TIME, 0,0,0 ).valueOf();
    let duration:number = DEFAULT_DURATION * 60 * 1000;
    let tmpTime = startTime ;

    while(tmpTime < endTime){
      this.timeSlots.push({
        startDate: new Date(tmpTime),
        endDate: new Date(tmpTime + duration),
      });
      tmpTime += duration;
    }
  }

  /**
   * 
   * 
   * 
   * @memberOf SchedulerService
   */
  getAllSlots(){
    let backwordDuration: number = BACKWORD_DAYS * DAY_IN_MILLISECONDS;
    let forwardDuration: number = FORWARD_DAYS * DAY_IN_MILLISECONDS;
    let startDate: number = new Date().valueOf() - backwordDuration;
    let endDate:number = new Date().valueOf() + forwardDuration;
    let tmpDuration:number = startDate;
    while(tmpDuration < endDate){
      this.getSlotsOfDay(tmpDuration);
      tmpDuration += DAY_IN_MILLISECONDS;
    }
  }
}
