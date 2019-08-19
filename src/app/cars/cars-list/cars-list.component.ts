import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Cars } from '../cars.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  public tableData1: TableData;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Model', 'Marka', 'Rok Produkcji', 'Typ', 'KM', 'Tablice', 'Kolor',  'Opcje']
    };
    this.service.getCars();
  }

  populateForm(row: Cars) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunac ten pojazd? ')) {
    this.service.deleteCar(id)
    .subscribe(res => {
      this.service.getCars();
      this.showNotification('top', 'right', 'Pomyślnie usunięto pojazd');
    },
      err => {
        console.log(err);
      })
    }
  }

  showNotification(from, align, message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = 3;
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
