import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user-service.service";
import { IUser } from "app/services/IUser";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(public userService: UserService) { 

  }

  ngOnInit() {
  }

}
