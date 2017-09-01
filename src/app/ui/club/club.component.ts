import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IClub } from "app/services/IClub";
import { ClubService } from "app/services/club-service.service";
import { SchedulerService } from "app/services/scheduler.service";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  clubId: number;
  club: IClub;
  constructor(private route: ActivatedRoute, private router: Router, private clubService: ClubService, scheduler: SchedulerService) { }

  ngOnInit() : void {
    this.clubId = +this.route.snapshot.paramMap.get('id');
    this.club = this.clubService.clubList[this.clubId];
  }

}
