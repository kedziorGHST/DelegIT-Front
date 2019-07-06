import { Injectable } from '@angular/core';
import { Customers } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  formData: Customers

  constructor() { }
}
