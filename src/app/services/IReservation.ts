import { IUser } from "app/services/IUser";
import { ICourt } from "app/services/ICourt";
import { ITimeSlot } from "app/services/ITimeSlot";

/**
 * Represents a reservation. 
 * 
 * @export
 * @interface IReservation
 */
export interface IReservation {
    user:IUser;                 //the user who made the reservation
    court: ICourt;              //The court that the user reserved
    timeSlot: ITimeSlot;        //The timeslot of the reservation
}