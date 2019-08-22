import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'app/user-info/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formUserData: User;
  formUserInfoData: UserInfo;
  readonly rootURL = 'http://localhost:5000/api';
  list: User[];
  userInfoList: UserInfo[];

  constructor(private http: HttpClient) { }

  postUser() {
    return this.http.post(this.rootURL + '/Users', this.formUserData),
           this.http.post(this.rootURL + '/UserInfoes', this.formUserInfoData) ;
  }

  putUser() {
    return this.http.put(this.rootURL + '/Users/' + this.formUserData.id, this.formUserData),
           this.http.put(this.rootURL + '/UserInfoes/' + this.formUserInfoData.id, this.formUserInfoData);
  }

  getUserInfo() {
    return this.http.get(this.rootURL + '/UserInfoes/1')//TO DO - ID from login user
    .toPromise()
    .then(res => this.formUserInfoData = res as UserInfo),
    this.http.get(this.rootURL + '/Users/1')
    .toPromise()
    .then(res => this.formUserData = res as User);
  }
}
