import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user-service.service";
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialogComponent } from "app/ui/login-dialog/login-dialog.component";

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
export class MenuComponent implements OnInit {

  dialogRef: MdDialogRef<LoginDialogComponent>;
  
  /**
   * Creates an instance of MenuComponent.
   * @param {UserService} userService 
   * @param {MdDialog} dialog 
   * 
   * @memberOf MenuComponent
   */
  constructor(private userService: UserService, private dialog: MdDialog) { }

  ngOnInit() {
  }

  /**
   * 
   * 
   * 
   * @memberOf MenuComponent
   */
  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginDialogComponent, {data: { userName: 'user1', userPassword: 'pass1' }});

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }
  
}
