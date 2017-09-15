import { Component } from '@angular/core';
import { UserService } from "app/services/user-service.service";
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialogComponent } from "app/ui/login-dialog/login-dialog.component";
import { DialogsService } from "app/services/dialogs/dialogs.service";

/**
 * 
 * @export
 * @class MenuComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  dialogRef: MdDialogRef<LoginDialogComponent>;
  
  /**
   * Creates an instance of MenuComponent.
   * @param {UserService} userService 
   * @param {MdDialog} dialog 
   * 
   * @memberOf MenuComponent
   */
  constructor(public userService: UserService, public dialogsService: DialogsService) { }

}
