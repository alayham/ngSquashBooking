import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IClub } from "app/services/IClub";
import { ClubService } from "app/services/club-service.service";
import { SchedulerService } from "app/services/scheduler.service";
import { ReservationsService } from "app/services/reservations.service";
import { UserService } from "app/services/user-service.service";
import { ICourt } from "app/services/ICourt";

/**
 * The Club Component
 * Display a club page at '/club/:id'.
 * The template includes many nested components.
 * 
 * @export
 * @class ClubComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  clubId: number;
  courtID: number;
  club: IClub;
  court: ICourt;
  
  /**
   * Creates an instance of ClubComponent.
   * 
   * Dependency Injections:
   * ----------------------
   * @param {ActivatedRoute} route //Used to find the ID of the club from the route.
   * @param {Router} router 
   * @param {ClubService} clubService // Used to fetch Club information
   * @param {UserService} userService // Used to customize club reservation template per user.
   * @param {ReservationsService} reservations used to query and show reservations.
   * 
   * @memberOf ClubComponent
   */
  constructor(public route: ActivatedRoute, public router: Router, public clubService: ClubService, 
    public userService: UserService, public reservations: ReservationsService) { 
  
  }

  /**
   * Initialize the club ID from the route.
   * 
   * 
   * @memberOf ClubComponent
   */
  ngOnInit() : void {
    this.clubId = +this.route.snapshot.paramMap.get('id');
    this.courtID = +this.route.snapshot.paramMap.get('cid');
    this.club = this.clubService.clubList[this.clubId];
    this.court=this.club.clubCourts[this.courtID];
  }

  setCourt(court:ICourt) {
    this.court = court;
  }
}
