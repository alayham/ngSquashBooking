import { Injectable } from '@angular/core';
import { IClub } from "app/services/IClub";
import { ICourt } from "app/services/ICourt";

/**
 * 
 * 
 * @export
 * @class ClubService
 */
@Injectable()
export class ClubService {
  clubList:IClub[] = [];
  totalClubs: number;
  /**
   * Creates an instance of ClubService.
   * 
   * @memberOf ClubService
   */
  constructor() {
    this.totalClubs = Math.floor((3 + Math.random() * 10 ));
    for(let i=0; i<= this.totalClubs; i++){
      let newclub = {
        clubName: 'Club ' + i,
        clubCourts: <ICourt[]>[],
        clubAddress: 'Somewhere in this city',
        clubTotalCourts: Math.floor((7 + Math.random() * 15 )),
        clubPhoto: 'http://via.placeholder.com/400x200/' + this.getRandomColor() + '?text=Club ' + i,
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

  /**
   * 
   * 
   * @returns 
   * 
   * @memberOf ClubService
   */
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
