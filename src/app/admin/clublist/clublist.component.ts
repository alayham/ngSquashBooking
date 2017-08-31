import { Component, OnInit } from '@angular/core';
import { ClubService } from "app/services/club-service.service";

@Component({
  selector: 'app-clublist',
  templateUrl: './clublist.component.html',
  styleUrls: ['./clublist.component.css']
})
export class ClublistComponent implements OnInit {

  constructor(public clubService: ClubService) { 
    
  }

  ngOnInit() {
  }

}
