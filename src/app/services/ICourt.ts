import { IClub } from "app/services/IClub";
import { IReservation } from "app/services/IReservation";

/**
 * 
 * 
 * @export
 * @interface ICourt
 */
export interface ICourt {
    courtName: string;
    courtClub: IClub;
    courtReservations: IReservation[];
}