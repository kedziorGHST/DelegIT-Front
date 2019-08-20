import { Component, OnInit } from '@angular/core';
import { RidesService } from '../rides.service';
import { Ride } from '../rides.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {

  public tableData1: TableData;

  constructor(private service: RidesService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Data wyjazdu', 'Data przyjazdu', 'Skąd', 'Dokąd', 'KM', 'Opcje']
    };
    this.service.userRideList();
  }

  populateForm(row: Ride) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunąć ten przjazd? ')) {
    this.service.deleteRide(id)
    .subscribe(res => {
      this.service.userRideList();
      this.showNotification('top', 'right', 'Pomyślnie usunięto przejazd');
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
