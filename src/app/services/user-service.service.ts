import { Injectable } from '@angular/core';
import { IUser } from "app/services/IUser";

@Injectable()
export class UserService {
  _totalUsers: number;
  _userList:IUser[] = [{userName: 'admin', userPassword: 'pass'}];
  constructor() {
    this._totalUsers = Math.floor((Math.random() * 10 + 1));
    for(let i=1; i<=this._totalUsers; i++){
      this._userList[i] = {
        userName: 'user' + i,
        userPassword: 'pass' + i,
      }
    }
  }

  getUserList(): IUser[]{
    return this._userList;
  }

  getUser(uid:number):IUser{
    return this._userList[uid];
  }

  logInUser(userName:string, userPassword: string): boolean{
    return false;
  }
}
