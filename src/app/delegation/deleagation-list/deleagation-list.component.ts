import { Component, OnInit } from '@angular/core';
import { DelegationService } from '../delegation.service';
import { Delegation } from '../delegation.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-deleagation-list',
  templateUrl: './deleagation-list.component.html',
  styleUrls: []
})
export class DeleagationListComponent implements OnInit {
  public tableData1: TableData;

  constructor(private service: DelegationService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Numer delegacji', 'Data wyjazdu', 'Data przyjazdu', 'Cel wyjazdu', 'Umowa', 'Zadanie', 'Opcje']
    };
    this.service.refreshList();
  }

  populateForm(row: Delegation) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunac tę delegację? ')) {
    this.service.deleteDelegation(id)
    .subscribe(res => {
      this.service.refreshList();
      this.showNotification('top', 'right', 'Pomyślnie usunięto delegacje');
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
