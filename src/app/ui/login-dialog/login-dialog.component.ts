import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { UserService } from "app/services/user-service.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginMessage:string = '';

  constructor(private userService: UserService, public dialogRef: MdDialogRef<LoginDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any = {}) { }

  ngOnInit() {
  }

  login(){
    if(this.userService.logInUser(this.data.userName, this.data.userPassword)){
      this.dialogRef.close(this.data);
    }else{
      this.loginMessage = "Invalid Login!!!"
    }
  }
}
