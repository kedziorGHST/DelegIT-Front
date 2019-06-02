import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public tableData1:TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
    headerRow: [ '#', 'Skrócona nazwa', 'NIP', 'Ulica', 'Miasto', 'Kierownik nazwisko', 'Opcje'],
    dataRows: [
    ['1', 'IPIN', '5334756315', 'Sokolska', 'Warszawa', 'Kowalski', ''],
    ['2', 'Bielsko', '1078541155', 'Hoża', 'Bielsko Biała', 'Nowak', ''],
    ['3', 'Medyków', '6016601840', 'Wysoka', 'Katowice', 'Bober', ''],
    ['4', 'Ceglana', '1121131598', 'Ceglana', 'Katowice', 'Newone', ''],
    ['5', 'Nebo', '3384583382', 'Miła', 'Rybnik', 'Smith', '']
    ]
    };
  }
}
