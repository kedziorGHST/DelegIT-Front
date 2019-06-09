import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  public tableData1: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Rodzaj', 'Klient', 'Od', 'Do', 'Zakres', 'Opcje'],
      dataRows: [
      ['1', 'Serwis', 'IPIN Warszawa', '7/3/2019', '8/3/2019', 'Kadry,Płace', ''],
      ['2', 'Wdrożenie', 'UCK Ceglana', '7/3/2019', '8/3/2019', 'Kadry,Płace', ''],
      ['3', 'Serwis', 'UCK Ligota', '7/3/2019', '8/3/2019', 'Kadry,Płace', ''],
      ['4', 'Wdrożenie', 'UCK Ligota', '7/3/2019', '8/3/2019', 'Kadry,Płace', ''],
      ['5', 'Serwis', 'IPIN Warszawa', '7/3/2019', '8/3/2019', 'Kadry,Płace', '']
      ]
      };
  }

}
