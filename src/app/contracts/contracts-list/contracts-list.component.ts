import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../contracts.service';
import { Contract } from '../contracts.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.scss']
})
export class ContractsListComponent implements OnInit {

  public tableData1: TableData;

  constructor(private service: ContractsService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Numer Placówki', 'Typ', 'Od', 'Do', 'Zakres', 'Opcje']
    };
    this.service.refreshList();
  }

  populateForm(row: Contract) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunąć tę umowę? ')) {
    this.service.deleteContract(id)
    .subscribe(res => {
      this.service.refreshList();
      this.showNotification('top', 'right', 'Pomyślnie usunięto umowę');
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
