import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customers } from './customers.model';
import { NgForm } from '@angular/forms';


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
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      fullCompanyName: '',
      shortCompanyName: '',
      nip: '',
      managerFName: '',
      managerLName: '',
      street: '',
      city: '',
      country: '',
      postCode: '',
    }
  }

  onSubmit(form:NgForm){
    this.service.postCustomers(form.value).subscribe(
      res => { form.value

      },
      err => {
        console.log(err);
      }
    )
  }
}
