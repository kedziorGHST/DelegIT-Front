import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

declare var $: any;

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  public tableData1: TableData;

  constructor(private service: CarsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.form.reset();
    }
    this.service.formData = {
      id: 0,
      model: '',
      company: '',
      year: 0,
      type: '',
      plates: '',
      colour: '',
      horsePower: 0
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
    this.service.postCar().subscribe(
      res => {
        this.resetForm();
        this.showNotification('top', 'right', 'Pomyślnie dodano nowy pojazd');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putCar().subscribe(
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
