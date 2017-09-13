import { Component } from '@angular/core';
import { ClubService } from "app/services/club-service.service";

/**
 * the club list is showed at the home page of the app.
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
export class ClublistComponent {

  /**
   * Creates an instance of ClublistComponent.
   * 
   * Dependency Injection:
   * ---------------------
   * @param {ClubService} clubService  /used to get the club list
   * 
   * @memberOf ClublistComponent
   */
  constructor(public clubService: ClubService) { 
    
  }
}
