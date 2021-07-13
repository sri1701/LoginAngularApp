import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users:string[] = [];
  constructor() { }

  saveUserInfo(user: string){
      this.users.push(user);
      localStorage.clear();
      localStorage.setItem('users',JSON.stringify(this.users));
  }

  getUserInfo(): string[]{
   let users = localStorage.getItem('users');
    return JSON.stringify(users).split(',');
  }
}
