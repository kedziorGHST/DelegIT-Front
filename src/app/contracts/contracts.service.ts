import { Injectable } from '@angular/core';
import { Contract } from './contracts.model';
import { Customers } from 'app/customers/customers.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  formData: Contract;
  readonly rootURL = 'http://localhost:5000/api';
  list: Contract[];
  customerList: Customers[];

  constructor(private http: HttpClient) { }

  postContract() {
    console.log(this.formData);
    return this.http.post(this.rootURL + '/Contracts', this.formData);
  }

  putContract() {
    return this.http.put(this.rootURL + '/Contracts/' + this.formData.id, this.formData);
  }

  deleteContract(id) {
    return this.http.delete(this.rootURL + '/Contracts/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Contracts')
    .toPromise()
    .then(res => this.list = res as Contract[]);
  }

  getCustomers() {
    return this.http.get(this.rootURL + '/Customers')
    .toPromise()
    .then(res => this.customerList = res as Customers[]);
  }
}
