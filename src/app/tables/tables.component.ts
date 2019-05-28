import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Umowa', 'Miasto', 'Data', 'Ilość dni', 'actions'],
          dataRows: [
              ['1', 'IPIN KiP', 'Warszawa', '12-05-2019', '2'],
              ['2', 'BB Cały system', 'Bielsko Biał', '12-05-2019', '3'],
              ['3', 'Ustroń Księgowość', 'Ustroń', '12-05-2019', '1'],
              ['4', 'Katowice Ligota', 'Katowice', '12-05-2019', '1'],
              ['5', 'Katowice Ceglana', 'Katowice', '12-05-2019', '2'],
              ['6', 'Rzeszów Polna', 'Rzeszów', '12-05-2019', '1']
          ]
      };
  }

}
