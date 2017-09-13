import { IClub } from "app/services/IClub";
import { IReservation } from "app/services/IReservation";

/**
 * Represents a court
 * 
 * @export
 * @interface ICourt
 */
export interface ICourt {
    courtName: string;
    courtClub: IClub; //Reference to the club
    courtReservations: IReservation[]; //References to the reservations of a club
}