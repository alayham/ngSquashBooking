import { Component, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { UserService } from "app/services/user-service.service";

/**
 * 
 * 
 * @export
 * @class LoginDialogComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  loginMessage:string = '';

  /**
   * Creates an instance of LoginDialogComponent.
   * @param {UserService} userService 
   * @param {MdDialogRef<LoginDialogComponent>} dialogRef 
   * @param {*} [data={}] 
   * 
   * @memberOf LoginDialogComponent
   */
  constructor(public userService: UserService, public dialogRef: MdDialogRef<LoginDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any = {}) { }


  /**
   * 
   * 
   * 
   * @memberOf LoginDialogComponent
   */
  login(){
    if(this.userService.logInUser(this.data.userName, this.data.userPassword)){
      this.dialogRef.close(this.data);
    }else{
      this.loginMessage = "Invalid Login!!!"
    }
  }
}
