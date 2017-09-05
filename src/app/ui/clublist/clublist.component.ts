import { Component, OnInit } from '@angular/core';
import { ClubService } from "app/services/club-service.service";

/**
 * 
 * 
 * @export
 * @class ClublistComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-clublist',
  templateUrl: './clublist.component.html',
  styleUrls: ['./clublist.component.css']
})
export class ClublistComponent implements OnInit {

  /**
   * Creates an instance of ClublistComponent.
   * @param {ClubService} clubService 
   * 
   * @memberOf ClublistComponent
   */
  constructor(public clubService: ClubService) { 
    
  }

  ngOnInit() {
  }

}
