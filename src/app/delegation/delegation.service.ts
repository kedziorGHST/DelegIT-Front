import { Injectable } from '@angular/core';
import { Delegation } from './delegation.model';
import { HttpClient } from '@angular/common/http';
import { count } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  formData: Delegation;
  readonly rootURL = 'http://localhost:58088/api';
  list: Delegation[];
  userList: Delegation[];

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
    return this.http.get(this.rootURL + '/Delegations/list/1')
    .toPromise()
    .then(res => this.userList = res as Delegation[]); // TO DO - Invalid
  }

  numberOfDelegations() {
    var obj = this.http.get(this.rootURL + '/Delegations/list/1');
    var count = Object.keys(obj).length;
    return count;
  }

}
