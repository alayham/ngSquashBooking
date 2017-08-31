export interface IClub{
    clubName: string;
    clubCourts: ICourt[];
    clubAddress: string;
    ClubNumberOfCourts():number;
}