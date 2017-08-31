import { IUser } from "app/services/IUser";
import { ICourt } from "app/services/ICourt";
import { ITimeSlot } from "app/services/ITimeSlot";

export interface IReservation {
    user:IUser;
    court: ICourt;
    timeSlot: ITimeSlot;
}