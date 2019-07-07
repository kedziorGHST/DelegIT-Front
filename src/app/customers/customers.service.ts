import { Injectable } from '@angular/core';
import { Customers } from './customers.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData: Customers;
  readonly rootURL = 'http://localhost:58088/api';

  constructor(private http: HttpClient) { }

  postCustomers(formData: Customers) {
    return this.http.post(this.rootURL + '/Customers', formData);
  }
}
