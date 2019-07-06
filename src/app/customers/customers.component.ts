import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customers } from './customers.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  constructor(private service:CustomersService) {
    formData:Customers
   }

  ngOnInit() {
  }
}
