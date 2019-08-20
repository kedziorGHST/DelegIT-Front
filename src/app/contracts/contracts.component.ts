import { Component, OnInit } from '@angular/core';
import { ContractsService } from './contracts.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  constructor(private service: ContractsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.getCustomers();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.form.reset();
    }
    this.service.formData = {
        id: 0,
        type: '',
        customerId: 0,
        from: null,
        to: null,
        range: 'Kadry,Księgowość' //TO DO - Value from Checkboxes
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
    this.service.postContract().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Pomyślnie dodano nową umowe');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putContract().subscribe(
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
