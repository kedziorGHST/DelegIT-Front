import { Injectable } from '@angular/core';
import { Visit } from './vistis.model';
import { User } from 'app/user/user.model';
import { HttpClient } from '@angular/common/http';
import { Contract } from 'app/contracts/contracts.model';
import { UserInfo } from 'app/user-info/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  formData: Visit;
  readonly rootURL = 'http://localhost:5000/api';
  list: Visit[];
  userList: UserInfo[];
  contractList: Contract[];


  constructor(private http: HttpClient) { }

  postVisit() {
    console.log(this.formData);
    return this.http.post(this.rootURL + '/Visits', this.formData);
  }

  putVisit() {
    return this.http.put(this.rootURL + '/Visits/' + this.formData.id, this.formData);
  }

  deleteVisit(id) {
    return this.http.delete(this.rootURL + '/Visits/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Visits')
    .toPromise()
    .then(res => this.list = res as Visit[]);
  }

  getContracts() {
    return this.http.get(this.rootURL + '/Contracts')
    .toPromise()
    .then(res => this.contractList = res as Contract[]);
  }

  getUser() {
    return this.http.get(this.rootURL + '/UserInfoes')
    .toPromise()
    .then(res => this.userList = res as UserInfo[]);
  }
}
