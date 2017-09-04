import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialogComponent } from "app/ui/login-dialog/login-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dialogRef: MdDialogRef<LoginDialogComponent>;
  
  constructor(private dialog: MdDialog) { 
    
  }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginDialogComponent, {data: { userName: 'user1', userPassword: 'pass1' }});

    this.dialogRef.afterClosed().subscribe(result => {

    });
  }


}