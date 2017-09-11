import { Injectable } from '@angular/core';
import { IUser } from "app/services/IUser";

const MIN_USERS = 300; //the minumum number of users to generate randomly
const MAX_USERS = 500; //the maximum number of users to generate randomly
/**
 * 
 * 
 * @export
 * @class UserService
 */
@Injectable()
export class UserService {
  userList:IUser[] = [{userName: 'admin', userPassword: 'pass', userPhoto: 'http://via.placeholder.com/200x400/?text=admin'}];
  _totalUsers: number = 1;
  user:IUser=null;
  
  /**
   * Creates an instance of UserService.
   * 
   * @memberOf UserService
   */
  constructor() {
    this._totalUsers = Math.floor((MIN_USERS + Math.random() * MAX_USERS ));

    for(let i=1; i<=this._totalUsers; i++){
      this.userList.push({
        userName: 'user' + i,
        userPassword: 'pass' + i,
        userPhoto: 'http://via.placeholder.com/200x400/?text=user' + i
      });
    }
  }

  /**
   * 
   * 
   * @param {number} uid 
   * @returns {IUser} 
   * 
   * @memberOf UserService
   */
  getUser(uid:number):IUser{
    return;
  }

  /**
   * 
   * 
   * @param {string} userName 
   * @param {string} userPassword 
   * @returns {boolean} 
   * 
   * @memberOf UserService
   */
  logInUser(userName:string, userPassword: string): boolean{
    for(let user of this.userList){
      if (user.userName == userName && user.userPassword == userPassword){
        this.user = user;
        return(true);
      }
    }
    return false;
  }
  /**
   * 
   * 
   * 
   * @memberOf UserService
   */
  logout(){
    this.user = null;
  }
}
