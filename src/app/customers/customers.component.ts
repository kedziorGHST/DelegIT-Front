import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { Customers } from './customers.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  constructor(private service: CustomersService,
      private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.form.reset();
    }
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

  onSubmit(form: NgForm) {
    if (this.service.formData.id === 0) {
      this.insertRecord(form)
    } else {
      this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postCustomers().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Pomyślnie dodano nowego użytkownika');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCustomers().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Dane zaktualizowane pomyślnie');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  showNotification(from, align, message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 2;
    $.notify({
        icon: 'pe-7s-gift',
        message: message
      }, {
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
      });
  }
}
