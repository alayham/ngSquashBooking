import { Component, OnInit } from '@angular/core';
import { ReservationsService } from "app/services/reservations.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationsService: ReservationsService) {

  }

  ngOnInit() {
  }

}
