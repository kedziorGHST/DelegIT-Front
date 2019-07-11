import { Component, OnInit } from '@angular/core';
import { DelegationService } from './delegation.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.css']
})
export class DelegationComponent implements OnInit {

  constructor(private service: DelegationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.form.reset();
    }
    this.service.formData = {
        id: 0,
        contractId: 0,
        userId: 1, //DO zrobienia - podmiana na prawdziwy user ID
        orderDate: null,
        departureDate: null,
        arrivalDate: null,
        numberDelegation: '',
        purpose: '',
        transport: '',
        country: '',
        city: '',
        type: '',
        lumpSum: 0,
        driveCost: 0,
        driveSum: 0,
        diet: 0,
        accomodationCost: 0,
        otherCost: 0,
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
    this.service.postDelegation().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Pomyślnie dodano nową delegacje');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putDelegation().subscribe(
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
