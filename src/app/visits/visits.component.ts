import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  public tableData1: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Pracownik', 'Umowa', 'Ilość h', 'Typ', 'Od', 'Do', 'Opcje'],
      dataRows: [
      ['1', 'Aleksander Kędzior', 'IPIN Warszawa', '6', 'Serwis','7/3/2019', '7/4/2019', ''],
      ['2', 'John Doe', 'UCK Ceglana', '3', 'Wdrożenie', '7/3/2019', '7/3/2019', ''],
      ['3', 'Jan Kowalski', 'UCK Ligota', '4', 'Wdrożenie', '5/3/2019', '5/3/2019', ''],
      ['4', 'Adam Nowak', 'IPIN Warszawa', '2', 'Serwis', '3/3/2019', '3/3/2019', ''],
      ['5', 'Szymon Stracała', 'UCK Ceglana', '1', 'Wdrożenie', '10/3/2019', '11/3/2019', '']
      ]
      };
  }

}
