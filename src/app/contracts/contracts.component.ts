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
      headerRow: [ '#', 'Numer Rejestracyjny', 'Rok', 'Typ', 'Marka', 'Model', 'Opcje'],
      dataRows: [
      ['1', 'SWD12345', '2018', 'Prywatny', 'BMW', 'E90', ''],
      ['2', 'SK15978', '2017', 'Służbowy', 'KIA', 'Ceed', ''],
      ['3', 'SR45687', '2015', 'Służbowy', 'Volkswagen', 'Passat', ''],
      ['4', 'KR45678', '2019', 'Służbowy', 'Opel', 'Corsa', ''],
      ['5', 'SZ25879', '2017', 'Służbowy', 'Chevrolet', 'Cruze', '']
      ]
      };
  }

}
