import { Injectable } from '@angular/core';
import { Customers } from './customers.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData: Customers;
  readonly rootURL = 'http://localhost:58088/api';
  list: Customers[];

  constructor(private http: HttpClient) { }

  postCustomers() {
    return this.http.post(this.rootURL + '/Customers', this.formData);
  }

  putCustomers() {
    return this.http.put(this.rootURL + '/Customers/' + this.formData.id, this.formData);
  }

  deleteCustomers(id) {
    return this.http.delete(this.rootURL + '/Customers/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Customers')
    .toPromise()
    .then(res => this.list = res as Customers[]);
  }
}
