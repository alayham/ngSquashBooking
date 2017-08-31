import { Injectable } from '@angular/core';
import { IUser } from "app/services/IUser";

@Injectable()
export class UserServiceService {

  constructor() { }

  getUserList(): IUser[]{
    return [];
  }

  getUser(uid:number):IUser{
    return;
  }

  logInUser(userName:string, userPassword: string): boolean{
    return false;
  }
}
