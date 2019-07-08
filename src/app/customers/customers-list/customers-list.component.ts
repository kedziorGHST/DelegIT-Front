import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styles: []
})
export class CustomersListComponent implements OnInit {
  public tableData1: TableData;

  constructor(private service: CustomersService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Skrócona nazwa', 'Nazwisko kierownika', 'Adres', 'Miasto', 'Kraj', 'Opcje']
    };
    this.service.refreshList();
  }
  populateForm(row: Customers) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunac tego użytkownika? ')) {
    this.service.deleteCustomers(id)
    .subscribe(res => {
      this.service.refreshList();
      this.showNotification('top', 'right', 'Pomyślnie usunięto klienta');
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
