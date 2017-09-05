import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IClub } from "app/services/IClub";
import { ClubService } from "app/services/club-service.service";
import { SchedulerService } from "app/services/scheduler.service";
import { ReservationsService } from "app/services/reservations.service";
import { UserService } from "app/services/user-service.service";

/**
 * 
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
  club: IClub;
  
  /**
   * Creates an instance of ClubComponent.
   * @param {ActivatedRoute} route 
   * @param {Router} router 
   * @param {ClubService} clubService 
   * @param {UserService} userService 
   * @param {ReservationsService} reservations 
   * 
   * @memberOf ClubComponent
   */
  constructor(private route: ActivatedRoute, private router: Router, private clubService: ClubService, private userService: UserService, private reservations: ReservationsService) { 
  
  }

  /**
   * 
   * 
   * 
   * @memberOf ClubComponent
   */
  ngOnInit() : void {
    this.clubId = +this.route.snapshot.paramMap.get('id');
    this.club = this.clubService.clubList[this.clubId];
  }

}
