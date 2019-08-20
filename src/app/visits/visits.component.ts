import { Component, OnInit } from '@angular/core';
import { VisitsService } from './visits.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  constructor(private service: VisitsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.getUser();
    this.service.getContracts();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.form.reset();
    }
    this.service.formData = {
        id: 0,
        userId: 0,
        contractID: 0,
        workingHours: 0,
        type: '',
        from: null,
        to: null
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
    this.service.postVisit().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Pomyślnie dodano nową wizytę');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putVisit().subscribe(
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
