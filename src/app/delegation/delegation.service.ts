import { Injectable } from '@angular/core';
import { Delegation } from './delegation.model';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  formData: Delegation;
  readonly rootURL = 'http://localhost:58088/api';
  list: Delegation[];
  userList: Delegation[];
  delegationsNumber: number;

  constructor(private http: HttpClient) { }

  postDelegation() {
    return this.http.post(this.rootURL + '/Delegations', this.formData);
  }

  putDelegation() {
    return this.http.put(this.rootURL + '/Delegations/' + this.formData.id, this.formData);
  }

  deleteDelegation(id) {
    return this.http.delete(this.rootURL + '/Delegations/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Delegations')
    .toPromise()
    .then(res => this.list = res as Delegation[]);
  }

  userDelegationList() {
    return this.http.get(this.rootURL + '/Delegations/list/1')//Dodać dynamicznego usera TO DO
    .toPromise()
    .then(res => this.userList = res as Delegation[]);
  }

  numberOfDelegations() {
    this.userDelegationList()
    return this.userList.length; //Wyciągnąć liczbę rekordów z API TO DO
  }
}
