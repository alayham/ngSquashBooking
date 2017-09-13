import { ICourt } from "app/services/ICourt";

/**
 * Representation of a club
 * 
 * @export
 * @interface IClub
 */
export interface IClub {
    clubName: string;
    clubCourts: ICourt[]; // An array of references to the courts of the club.
    clubAddress: string;
    clubTotalCourts:number;  //DEPRECATED: The total number of courts.
    clubPhoto: string; // a url to a photo
}