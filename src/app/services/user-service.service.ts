import { Injectable } from '@angular/core';
import { IUser } from "app/services/IUser";

@Injectable()
export class UserService {
  userList:IUser[] = [{userName: 'admin', userPassword: 'pass'}];
  _totalUsers: number = 1;
  
  constructor() {
    this._totalUsers = Math.floor((1 + Math.random() * 10 ));

    for(let i=1; i<=this._totalUsers; i++){
      this.userList.push({
        userName: 'user' + i,
        userPassword: 'pass' + i,
      });
    }
  }

  getUser(uid:number):IUser{
    return;
  }

  logInUser(userName:string, userPassword: string): boolean{
    return false;
  }
}
