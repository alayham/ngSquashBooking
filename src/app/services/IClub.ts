import { ICourt } from "app/services/ICourt";

export interface IClub {
    clubName: string;
    clubCourts: ICourt[];
    clubAddress: string;
    clubTotalCourts:number;
    clubPhoto: string;
}