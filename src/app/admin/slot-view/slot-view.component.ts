import { Component, OnInit } from '@angular/core';
import { SchedulerService } from "app/services/scheduler.service";

@Component({
  selector: 'app-slot-view',
  templateUrl: './slot-view.component.html',
  styleUrls: ['./slot-view.component.css']
})
export class SlotViewComponent implements OnInit {

  constructor(public scheduler: SchedulerService) {
    
   }

  ngOnInit() {
  }

}
