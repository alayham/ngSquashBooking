import { Injectable } from '@angular/core';
import { IUser } from "app/services/IUser";

const MIN_USERS = 1000; //the minumum number of users to generate randomly
const MAX_USERS = 2000; //the maximum number of users to generate randomly
/**
 * The user service handles user accounts and logins
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

    //generate a random number of users
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
   * log in a user
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
   * log out the logged in user
   * 
   * 
   * @memberOf UserService
   */
  logout(){
    this.user = null;
  }
}
