import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../visits.service';
import { Visit } from '../vistis.model';

declare interface TableData {
  headerRow: string[];
}
declare var $: any;

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  public tableData1: TableData;

  constructor(private service: VisitsService) { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Użytkownik', 'Umowa', 'Ilość godzin', 'Typ', 'Od', 'Do', 'Opcje']
    };
    this.service.refreshList();
  }

  populateForm(row: Visit) {
    this.service.formData = Object.assign({}, row);
  }

  onDelete(id) {
    if (confirm('Czy jesteś pewien że chcesz usunąć tę wizytę? ')) {
    this.service.deleteVisit(id)
    .subscribe(res => {
      this.service.refreshList();
      this.showNotification('top', 'right', 'Pomyślnie usunięto wizytę');
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
