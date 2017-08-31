import { IUser } from "app/services/IUser";
import { ICourt } from "app/services/ICourt";

export interface IReservation {
    user:IUser;
    court: ICourt;
    ITimeslot: any; //TO DO: Decide on how to handle Timeslots.
}