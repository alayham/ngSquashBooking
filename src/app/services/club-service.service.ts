import { Injectable } from '@angular/core';
import { IClub } from "app/services/IClub";
import { ICourt } from "app/services/ICourt";

@Injectable()
export class ClubService {
  clubList:IClub[] = [];
  totalClubs: number;
  constructor() {
    this.totalClubs = Math.floor((3 + Math.random() * 10 ));
    for(let i=0; i<= this.totalClubs; i++){
      let newclub = {
        clubName: 'Club ' + i,
        clubCourts: <ICourt[]>[],
        clubAddress: 'Somewhere in this city',
        clubTotalCourts: Math.floor((7 + Math.random() * 15 ))
      };
      for(let j=0; j<newclub.clubTotalCourts; j++){
        newclub.clubCourts.push({
          courtName: newclub.clubName + ' / ' + 'Court ' + j,
          courtReservations: [],
          courtClub: newclub,
        });
      }
      this.clubList.push(newclub);
    }
  }
}
