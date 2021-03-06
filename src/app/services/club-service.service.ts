import { Injectable } from '@angular/core';
import { IClub } from "app/services/IClub";
import { ICourt } from "app/services/ICourt";

const MIN_CLUBS= 3;
const MAX_CLUBS= 10;
const MIN_COURTS=7;
const MAX_COURTS=10;

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
    //get a club total number randomly
    this.totalClubs = Math.floor((MIN_CLUBS + Math.random() * (MAX_CLUBS - MIN_CLUBS) ));
    for(let i=0; i<= this.totalClubs; i++){ 
      let newclub = { //build a club
        clubName: 'Club ' + i,
        clubCourts: <ICourt[]>[],
        clubAddress: 'Somewhere in this city',
        clubTotalCourts: Math.floor((MIN_COURTS + Math.random() * (MAX_COURTS - MIN_COURTS) )),
        clubPhoto: 'http://via.placeholder.com/400x200/' + this.getRandomColor() + '?text=Club ' + i,
      };
      for(let j=0; j<newclub.clubTotalCourts; j++){ //build courts of a club
        newclub.clubCourts.push({
          courtName: 'Court ' + j,
          courtReservations: [],
          courtClub: newclub, //each court contains a reference to the parent club object.
        });
      }
      this.clubList.push(newclub);
    }
  }

  /**
   * return an array of all the courts in all clubs.
   * 
   * @returns {ICourt[]} 
   * 
   * @memberOf ClubService
   */
  getAllCourts():ICourt[]{
    let tmpCourts:ICourt[] = [];
      for(let club of this.clubList){
        for (let court of club.clubCourts)
        tmpCourts.push(court);
      }
    return tmpCourts
  }


  /**
   * 
   * return a random color, used to generate club photos randomly
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
